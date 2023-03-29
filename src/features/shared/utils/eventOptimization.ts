type Options = {
  dismissCondition?: () => boolean;
  triggerCondition?: () => boolean;
};

export const eventOptimization = (
  callback: (e: Event) => void,
  options: Options = {},
) => {
  const { dismissCondition, triggerCondition } = options;
  if (!callback) throw Error('Invalid required arguments');

  let tick = false;
  let prevTimeStamp: DOMHighResTimeStamp | null = null;

  return (e: Event) => {
    if (tick) return;
    tick = true;

    const eventHandler = (timestamp: DOMHighResTimeStamp) => {
      if (dismissCondition && dismissCondition()) {
        tick = false;
        return;
      }
      if ((triggerCondition && triggerCondition()) || !triggerCondition) {
        tick = false;
        if (prevTimeStamp === timestamp) return;
        prevTimeStamp = timestamp;
        callback(e);
      }
    };

    return requestAnimationFrame(eventHandler);
  };
};

type Options = {
  dismissCondition?: () => boolean;
  triggerCondition?: () => boolean;
};

export const eventOptimization = (
  callback: () => void,
  options: Options = {},
) => {
  const { dismissCondition, triggerCondition } = options;
  if (!callback) throw Error('Invalid required arguments');

  let tick = false;
  let prevTimeStamp: DOMHighResTimeStamp | null = null;

  return () => {
    if (tick) return;
    tick = true;

    return requestAnimationFrame((timestamp) => {
      const isSameTimeStamp = prevTimeStamp === timestamp;
      if ((dismissCondition && dismissCondition()) || isSameTimeStamp) {
        tick = false;
        return;
      }
      if ((triggerCondition && triggerCondition()) || !triggerCondition) {
        tick = false;
        prevTimeStamp = timestamp;
        return callback();
      }
    });
  };
};

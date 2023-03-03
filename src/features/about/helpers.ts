import { IntroProperty } from "./types";

export const calcValue = (scrollRatio: number, settings: IntroProperty) => {
  let rv = 0;
  if (
    typeof settings.startScroll === 'undefined' ||
    typeof settings.endScroll === 'undefined'
  ) {
    rv =
      scrollRatio * (settings.endValue - settings.startValue) +
      settings.startValue;
    return rv;
  }
  return rv;
};

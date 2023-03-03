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

  // const partScrollStart = settings.startScroll * scrollValue;
  // const partScrollEnd = settings.endScroll * scrollValue;
  // const partScrollHeight = partScrollEnd - partScrollStart;
  // if (scrollValue >= partScrollStart && scrollValue <= partScrollEnd) {
  //   rv =
  //     ((scrollValue - partScrollStart) / partScrollHeight) *
  //       (settings.endValue - settings.startValue) +
  //     settings.startValue;
  //   return rv;
  // }
  // if (scrollValue < partScrollStart) {
  //   rv = settings.startValue;
  //   return rv;
  // }
  // if (scrollValue > partScrollEnd) {
  //   rv = settings.endValue;
  //   return rv;
  // }
  return rv;
};

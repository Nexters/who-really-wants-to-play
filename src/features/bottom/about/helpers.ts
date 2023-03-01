import { IntroInfoSettings } from "./types";

export const INTRO_SETTINGS: IntroInfoSettings = {
  titleOpacity: {
    startValue: 0,
    endValue: 1,
    startScroll: 0,
    endScroll: 1,
  },
  titleLetterSpacing: {
    startValue: 100,
    endValue: 0,
    startScroll: 0,
    endScroll: 1,
  },
  titleTop: {
    startValue: 0,
    endValue: window.innerHeight - 500,
    startScroll: 0,
    endScroll: 1,
  }
};

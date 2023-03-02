import { IntroInfoSettings } from "./types";

export const TITLE = 'About us';

const PROFILES_LIST = [
  {
    name: 'Kim Yeonghwan',
    job: 'Designer',
  },
  {
    name: 'Lee Hyebin',
    job: 'Designer',
  },
  {
    name: 'Lee Sangchul',
    job: 'Developer',
  },
  {
    name: 'An Yulim',
    job: 'Developer',
  },
  {
    name: 'Kim Dongyong',
    job: 'Developer',
  },
  {
    name: 'Cho Yejin',
    job: 'Developer',
  },
];

export const PROFILES_REPEAT = [
  ...PROFILES_LIST,
  ...PROFILES_LIST,
  ...PROFILES_LIST,
];

const range = (start: number, stop: number, step: number) => {
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));}
export const PROFILES_LIST_SCROLL = range(200, 200*PROFILES_REPEAT.length, 200);

export const INTRO_SETTINGS: IntroInfoSettings = {
  titleOpacity: {
    startValue: 0,
    endValue: 1,
  },
  titleLetterSpacing: {
    startValue: 100,
    endValue: 0,
  },
  titleTop: {
    startValue: 400,
    endValue: 10,
  },
  boxPaddingTop: {
    startValue: 800,
    endValue: 500,
  },
};

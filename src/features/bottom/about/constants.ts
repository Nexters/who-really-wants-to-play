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

const BLANK_LIST = [
  {
    name: '',
    job: '',
  },
  {
    name: '',
    job: '',
  },
  {
    name: '',
    job: '',
  },
];

export const PROFILES_REPEAT = [
  ...PROFILES_LIST,
  ...PROFILES_LIST,
  ...PROFILES_LIST,
  ...BLANK_LIST,
];

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
};

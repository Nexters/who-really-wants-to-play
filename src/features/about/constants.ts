import { IntroInfoSettings } from "./types";

export const TITLE = 'About us';

const PROFILES_LIST = [
  {
    name: 'Lee Sangchul',
    job: 'PM, Developer',
    color: '#BFE0B0',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/sc.webp',
  },
  {
    name: 'An Yulim',
    job: 'Developer',
    color: '#C8B0E0',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/yl.webp',
  },
  {
    name: 'Kim Dongyong',
    job: 'Developer',
    color: '#E0BCB0',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/dy.webp',
  },
  {
    name: 'Cho Yejin',
    job: 'Developer',
    color: '#E0D8B0',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/yj.webp',
  },
  {
    name: 'Kim Yeonghwan',
    job: 'Designer',
    color: '#B0D4E0',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/yh.webp',
  },
  {
    name: 'Lee Hyebin',
    job: 'Designer',
    color: '#E0B0BC',
    src: 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/hb.webp',
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
  titleOpacityOut: {
    startValue: 1,
    endValue: 0,
  },
  titleLetterSpacing: {
    startValue: 100,
    endValue: 0,
  },
  titleTop: {
    startValue: -400,
    endValue: 0,
  },
  profileBoxPaddingTop: {
    startValue: 800,
    endValue: 500,
  },
};

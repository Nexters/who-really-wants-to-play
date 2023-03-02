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
  // ...BLANK_LIST,
  ...PROFILES_LIST,
  ...PROFILES_LIST,
  ...PROFILES_LIST,
  ...BLANK_LIST,
  ...BLANK_LIST,
];

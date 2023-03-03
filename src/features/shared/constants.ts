export const ACTIVE_INDEX_MAP = {
  0: 'LANDING',
  1: 'DAILY_BOOK',
  2: 'DAILY_BOOK',
  3: 'DAILY_BOOK',
  4: 'DAILY_BOOK',
  5: 'DAILY_BOOK',
  6: 'DAILY_BOOK',
  7: 'DAILY_BOOK',
  8: 'DAILY_BOOK',
  9: 'DAILY_BOOK',
  10: 'DAILY_BOOK',
  11: 'DAILY_BOOK',
  12: 'GALLERY',
  13: 'ABOUT',
  14: 'DETAIL_COVER',
  15: 'DETAIL_KEYWORD',
  16: 'DETAIL_DESCRIPTION',
  17: 'DETAIL_MEMORIES',
};

const MAP_LENGTH = Object.keys(ACTIVE_INDEX_MAP).length;
const DAILY_BOOK_ARRAY = Array.from(
  { length: MAP_LENGTH - 3 },
  (_, idx) => idx + 1,
);

export const PAGE_NAME = {
  LANDING: 0,
  DAILY_BOOK: DAILY_BOOK_ARRAY,
  GALLERY: MAP_LENGTH - 6,
  ABOUT: MAP_LENGTH - 5,
  DETAIL_COVER: MAP_LENGTH - 4,
  DETAIL_KEYWORD: MAP_LENGTH - 3,
  DETAIL_DESCRIPTION: MAP_LENGTH - 2,
  DETAIL_MEMORIES: MAP_LENGTH - 1,
};

export const PREV_PHOTO_PATH_PREFIX =
  'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images';

export const PHOTO_PATH_PREFIX = 'https://jjinn-nolsa.imgix.net';

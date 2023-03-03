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
};

const MAP_LENGTH = Object.keys(ACTIVE_INDEX_MAP).length;
const DAILY_BOOK_ARRAY = Array.from(
  { length: MAP_LENGTH - 3 },
  (_, idx) => idx + 1,
);

export const PAGE_NAME = {
  LANDING: 0,
  DAILY_BOOK: DAILY_BOOK_ARRAY,
  GALLERY: MAP_LENGTH - 2,
  ABOUT: MAP_LENGTH - 1,
};

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
  12: ['GALLERY', 'ABOUT'],
};

const MAP_LENGTH = Object.keys(ACTIVE_INDEX_MAP).length;
const DAILY_BOOK_ARRAY = [];
for (let i = 1; i < MAP_LENGTH - 1; i++) {
  DAILY_BOOK_ARRAY.push(i);
}

export const PAGE_NAME = {
  LANDING: 0,
  DAILY_BOOK: DAILY_BOOK_ARRAY,
  BOTTOM: MAP_LENGTH - 1,
};

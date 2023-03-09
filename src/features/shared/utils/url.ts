import {
  PHOTO_PATH_PREFIX,
  PREV_PHOTO_PATH_PREFIX,
} from '~/features/shared/constants';

export const getUrlWithParam = (
  url: string,
  param: Record<string, string | number | undefined>,
): string => {
  const query = Object.entries(param)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return url + (query ? `?${query}` : '');
};

export const getImageUrlWithCdn = (src: string): string => {
  return src.startsWith(PHOTO_PATH_PREFIX)
    ? src
    : PHOTO_PATH_PREFIX + src.split(PREV_PHOTO_PATH_PREFIX)[1];
};

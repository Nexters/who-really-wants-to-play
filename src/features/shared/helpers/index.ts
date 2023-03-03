import { PHOTO_PATH_PREFIX } from '../constants';

export const getFullImgUrl = (src: string) => `${PHOTO_PATH_PREFIX}${src}.webp`;

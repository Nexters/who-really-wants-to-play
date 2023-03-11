import { forwardRef, LegacyRef } from 'react';

import '~/style/index.scss';
import { ImgProps } from '~/types';
import {
  getImageUrlWithCdn,
  getUrlWithParam,
} from '~/features/shared/utils/url';

type Props = ImgProps & {
  onClick?: () => void;
  options?: Record<string, string | number | undefined>;
};

const Image = (props: Props, ref: LegacyRef<HTMLImageElement> | null) => {
  const { src, alt, width, height, className, style, onClick, options } = props;
  const aspectRatio = width && height ? width / height : 0;
  const srcWithCdn = getImageUrlWithCdn(src);
  const srcWithSize = getUrlWithParam(srcWithCdn, {
    ...options,
    w: width,
    h: height,
    fm: 'webp',
  });
  return (
    <img
      {...{ className, alt, width, height, ref }}
      src={srcWithSize}
      style={{ ...style, aspectRatio }}
      onClick={onClick}
    />
  );
};

export default forwardRef(Image);

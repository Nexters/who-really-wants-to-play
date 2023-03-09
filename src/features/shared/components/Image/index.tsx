import { forwardRef, LegacyRef } from 'react';

import '~/style/index.scss';
import { ImgProps } from '~/types';
import { getUrlWithParam } from '~/features/shared/utils/url';

type Props = ImgProps & { onClick?: () => void };

const Image = (props: Props, ref: LegacyRef<HTMLImageElement> | null) => {
  const { src, alt, width, height, className, style, onClick } = props;
  const aspectRatio = width && height ? width / height : 0;
  const srcWithSize = getUrlWithParam(src, { w: width, h: height, fm: 'webp' });
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

import { forwardRef, LegacyRef } from 'react';

import '~/style/index.scss';
import { ImgProps } from '~/types';

const Image = (props: ImgProps, ref: LegacyRef<HTMLImageElement> | null) => {
  const { src, alt, width, height, className } = props;
  const aspectRatio = width && height ? width / height : 0;
  return (
    <img
      {...{ className, src, alt, width, height, ref }}
      style={{ aspectRatio }}
    />
  );
};

export default forwardRef(Image);

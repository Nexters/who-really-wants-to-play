import { forwardRef, LegacyRef } from 'react';
import '~/style/index.scss';
import { ImgProps } from '~/types';

const Image = (props: ImgProps, ref: LegacyRef<HTMLImageElement> | null) => {
  const { src, alt, width, height, className } = props;
  return <img {...{ className, src, alt, width, height, ref }} />;
};

export default forwardRef(Image);

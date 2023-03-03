import { forwardRef, LegacyRef } from 'react';

import '~/style/index.scss';
import { ImgProps } from '~/types';

type Props = ImgProps & { onClick?: () => void };

const Image = (props: Props, ref: LegacyRef<HTMLImageElement> | null) => {
  const { src, alt, width, height, className, onClick } = props;
  const aspectRatio = width && height ? width / height : 0;
  const srcWithSize = `${src}?w=${width}&h=${height}`;
  return (
    <img
      {...{ className, alt, width, height, ref }}
      src={srcWithSize}
      style={{ aspectRatio }}
      onClick={onClick}
    />
  );
};

export default forwardRef(Image);

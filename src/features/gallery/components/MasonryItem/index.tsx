import classnames from 'classnames';

import { GALLERY_IMG_WIDTH } from '../../constants';

import Image from '~/features/shared/components/Image';
import { ImgProps, StyleProps } from '~/types';

type Props = {
  animationDuration?: string;
} & ImgProps &
  StyleProps;

const MasonryItem = (props: Props) => {
  const { animationDuration, style, className, ...img } = props;
  const width = GALLERY_IMG_WIDTH;
  const height = GALLERY_IMG_WIDTH / (img?.aspectRatio ?? 1);

  return (
    <div
      className={classnames('grid-item', className)}
      style={{
        animationDuration,
        ...style,
      }}
    >
      <Image {...img} width={width} height={height} />
    </div>
  );
};

export default MasonryItem;

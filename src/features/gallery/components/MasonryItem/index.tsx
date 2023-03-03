import classnames from 'classnames';

import Image from '~/features/shared/components/Image';
import { ImgProps, StyleProps } from '~/types';

type Props = {
  animationDuration?: string;
} & ImgProps &
  StyleProps;

const MasonryItem = (props: Props) => {
  const { animationDuration, style, className, ...img } = props;
  return (
    <div
      className={classnames('grid-item', className)}
      style={{
        animationDuration,
        ...style,
      }}
    >
      <Image {...img} />
    </div>
  );
};

export default MasonryItem;

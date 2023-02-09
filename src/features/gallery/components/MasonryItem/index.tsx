import { forwardRef, LegacyRef } from 'react';
import classnames from 'classnames';

import { ImgProps, StyleProps } from '~/types';
import Image from '~/features/shared/components/Image';

type Props = {
  animationDuration?: string;
} & ImgProps &
  StyleProps;

const MasonryItem = (props: Props, ref: LegacyRef<HTMLDivElement> | null) => {
  const { animationDuration, style, className, ...img } = props;
  return (
    <div
      ref={ref}
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

export default forwardRef(MasonryItem);

import { forwardRef, LegacyRef } from 'react';

import { ImgProps } from '~/types';
import Image from '~/features/shared/components/Image';

type Props = {
  animationDuration?: string;
} & ImgProps;

const MasonryItem = (props: Props, ref: LegacyRef<HTMLDivElement> | null) => {
  const { animationDuration, ...img } = props;
  return (
    <div
      ref={ref}
      className="grid-item"
      style={{
        animationDuration,
      }}
    >
      <Image {...img} />
    </div>
  );
};

export default forwardRef(MasonryItem);

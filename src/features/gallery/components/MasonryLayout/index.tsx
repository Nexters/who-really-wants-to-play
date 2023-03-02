import { useMasonryLayout } from '../../hooks/useMasonryLayout';
import { ANIMATION_DURATION } from '../../constants';
import MasonryItem from '../MasonryItem';

import { ImgProps } from '~/types';
import { PAGE_NAME } from '~/features/shared/constants';

type Props = {
  imgList: ImgProps[];
  gap: string;
  activeIndex: number;
};

const MasonryLayout = (props: Props) => {
  const { gap, imgList, activeIndex } = props;
  const animationPartTime = ANIMATION_DURATION / imgList.length;
  const { containerRef, itemRefs, gridRowEnds } = useMasonryLayout(100);
  const isGallery = activeIndex === PAGE_NAME.GALLERY;

  return (
    <div className="grid-container" style={{ gap: gap }} ref={containerRef}>
      {imgList.map((img, idx) => {
        const animationDurationPerImg = animationPartTime * (idx + 1);
        return (
          <MasonryItem
            {...img}
            key={`${img.id ?? img.alt}` + isGallery}
            animationDuration={`${animationDurationPerImg}s`}
            style={{ gridRowEnd: gridRowEnds[idx] ?? 'auto' }}
            ref={(elem) => {
              if (!elem) return;
              itemRefs.current[idx] = elem;
            }}
          />
        );
      })}
    </div>
  );
};

export default MasonryLayout;

import { useRef } from 'react';

import { getGridRowEnd } from '../../utils/getGridRowEnd';
import { useMasonryLayout } from '../../hooks/useMasonryLayout';
import { ANIMATION_DURATION } from '../../constants';
import MasonryItem from '../MasonryItem';

import { ImgProps } from '~/types';

type Props = {
  imgList: ImgProps[];
  gap: string;
};

const MasonryLayout = (props: Props) => {
  const { gap, imgList } = props;
  const animationPartTime = ANIMATION_DURATION / imgList.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  useMasonryLayout(handleLayout);

  function handleLayout() {
    itemRefs.current.forEach((itemRef) => {
      const container = containerRef.current;
      if (!itemRef || !container) return;
      itemRef.style.gridRowEnd = getGridRowEnd(container, itemRef); // TODO: 사이드 이펙트 지양
    });
  }

  return (
    <div className={'grid-container'} style={{ gap: gap }} ref={containerRef}>
      {imgList.map((img, idx) => {
        const animationDurationPerImg = animationPartTime * (idx + 1);
        return (
          <MasonryItem
            {...img}
            key={img.id ?? img.alt}
            animationDuration={`${animationDurationPerImg}s`}
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

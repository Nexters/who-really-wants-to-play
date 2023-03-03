import { FunctionComponent, useRef } from 'react';

import SubTitle from '../shared/components/SubTitle';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';
import { getMinusTranslateValue } from './helpers';
import { useGalleryScrollRatio } from './hooks/useGalleryScrollRatio';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';
import { PAGE_NAME } from '~/features/shared/constants';
import { AppData } from '~/features/types';

type DailyBookContainerProps = AppData & { scrollValue: number };

const GalleryContainer: FunctionComponent<DailyBookContainerProps> = ({
  refList,
  scrollValue,
  activeIndex,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleWidth = titleRef.current?.scrollWidth || 0;
  const animationRatio = useGalleryScrollRatio(
    // TODO: 불필요한 상태 변경 최적화, useState대신 useRef로 스크롤 이벤트 사용 필요성
    refList.current[PAGE_NAME.GALLERY],
    scrollValue,
  );
  const isGallery = activeIndex === PAGE_NAME.GALLERY;
  const titleMustMoveDist = titleWidth * animationRatio;

  return (
    <section
      className="gallery scroll-snap"
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.GALLERY] = ef;
      }}
      data-id={PAGE_NAME.GALLERY}
    >
      <SubTitle
        ref={titleRef}
        title="Our Archive"
        className="gallery-title title-animation"
        style={{
          transform: getMinusTranslateValue('X', titleMustMoveDist, 'px'),
        }}
      />
      <MasonryLayout
        imgList={GalleryMockImgList}
        gap={GRID_GAP}
        columnCount={4}
        animationRatio={animationRatio}
        isHorizontalLayout
        key={`gallery-rerender-${isGallery}`}
      />
    </section>
  );
};

export default GalleryContainer;

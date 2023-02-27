import { FunctionComponent, useRef } from 'react';

import SubTitle from '../shared/components/SubTitle';
import { AppData } from '../types';
import { PAGE_NAME } from '../shared/constants';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';
import { getMinusTranslateX } from './helpers';
import { useGalleryScrollRatio } from './hooks/useGalleryScrollRatio';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';

type DailyBookContainerProps = AppData;

const GalleryContainer: FunctionComponent<DailyBookContainerProps> = ({
  refList,
  containerRef,
  activeIndex,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleWidth = titleRef.current?.scrollWidth || 0;
  const animationRatio = useGalleryScrollRatio(
    // TODO: 불필요한 상태 변경 최적화, useState대신 useRef로 스크롤 이벤트 사용 필요성
    containerRef,
    refList.current[PAGE_NAME.GALLERY],
  );
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
          transform: getMinusTranslateX(titleMustMoveDist, 'px'),
        }}
      />
      <MasonryLayout
        imgList={GalleryMockImgList}
        gap={GRID_GAP}
        activeIndex={activeIndex}
      />
    </section>
  );
};

export default GalleryContainer;

import { FunctionComponent } from 'react';

import SubTitle from '../shared/components/SubTitle';
import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';
import { useTitleAnimation } from './hooks/useTitleAnimation';
import { getTranslateX } from './helpers';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';

type DailyBookContainerProps = AppData;

const GalleryContainer: FunctionComponent<DailyBookContainerProps> = ({
  refList,
}) => {
  const { titleRef, overflowedWidth } = useTitleAnimation(200);

  return (
    <section
      className="gallery scroll-snap"
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.BOTTOM] = ef;
      }}
      data-id={PAGE_NAME.BOTTOM}
    >
      <SubTitle
        ref={titleRef}
        title="Our Archive"
        className="title-animation"
        style={{ transform: getTranslateX(overflowedWidth) }}
      />
      <MasonryLayout imgList={GalleryMockImgList} gap={GRID_GAP} />
    </section>
  );
};

export default GalleryContainer;

import { FunctionComponent } from 'react';

import SubTitle from '../../shared/components/SubTitle';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';
import { useTitleAnimation } from './hooks/useTitleAnimation';
import { getTranslateX } from './helpers';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';

const GalleryContainer: FunctionComponent = () => {
  const { titleRef, overflowedWidth } = useTitleAnimation(200);

  return (
    <section className="gallery">
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

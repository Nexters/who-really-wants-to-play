import { FunctionComponent } from 'react';

import '~/style/gallery.scss';
import SubTitle from '../shared/components/SubTitle';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';

const Gallery: FunctionComponent = () => {
  return (
    <section className="gallery">
      <SubTitle title="Our Archive" />
      <MasonryLayout imgList={GalleryMockImgList} gap={GRID_GAP} />
    </section>
  );
};

export default Gallery;

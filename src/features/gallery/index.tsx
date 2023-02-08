import SubTitle from '../shared/components/SubTitle';

import MasonryLayout from './components/MasonryLayout';

import { FunctionComponent } from 'react';
import { GalleryMockImgList } from '~/mocks/gallery';

const Gallery: FunctionComponent = () => {
  return (
    <section className="gallery">
      <SubTitle title="Our Archive" />
      <MasonryLayout imgList={GalleryMockImgList} gap="20px" />
    </section>
  );
};

export default Gallery;

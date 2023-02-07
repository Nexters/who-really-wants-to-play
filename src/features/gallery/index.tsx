import MasonryLayout from './components/MasonryLayout';

import { FunctionComponent } from 'react';
import { GalleryMockImgList } from '~/mocks/gallery';

const Gallery: FunctionComponent = () => {
  return <MasonryLayout imgList={GalleryMockImgList} gap="20px" columns={4} />;
};

export default Gallery;

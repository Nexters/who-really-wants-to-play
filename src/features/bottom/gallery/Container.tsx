import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

import SubTitle from '../../shared/components/SubTitle';

import MasonryLayout from './components/MasonryLayout';
import { GRID_GAP } from './constants';
import { useTitleAnimation } from './hooks/useTitleAnimation';
import { getTranslateX } from './helpers';

import { GalleryMockImgList } from '~/features/gallery/mocks/gallery';

type GalleryContainerProps = {
  setGalleryContainerHeight: Dispatch<SetStateAction<number>>;
};

const GalleryContainer: FunctionComponent<GalleryContainerProps> = ({
  setGalleryContainerHeight,
}) => {
  const { titleRef, overflowedWidth } = useTitleAnimation(200);

  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!galleryRef.current) return;
    setGalleryContainerHeight(galleryRef.current?.clientHeight);
  }, [galleryRef.current?.clientHeight]);

  return (
    <section className="gallery" ref={galleryRef}>
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

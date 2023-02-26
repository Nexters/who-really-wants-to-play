import { FunctionComponent, useEffect, useState } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import GalleryContainer from './gallery/Container';
import AboutContainer from './about/Container';

type BottomContainerProps = AppData;

const BottomContainer: FunctionComponent<BottomContainerProps> = ({
  refList,
  scrollValue,
}) => {
  const [galleryContainerHeight, setGalleryContainerHeight] =
    useState<number>(0);
  const [aboveContainersHeight, setAboveContainersHeight] = useState<number>(0);

  useEffect(() => {
    setAboveContainersHeight(window.innerHeight * PAGE_NAME.BOTTOM - 1);
  }, []);
  console.log(scrollValue);

  return (
    <div
      className="scroll-snap"
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.BOTTOM] = ef;
      }}
      data-id={PAGE_NAME.BOTTOM}
    >
      <GalleryContainer setGalleryContainerHeight={setGalleryContainerHeight} />
      <AboutContainer
        scrollValue={scrollValue}
        aboveContainersHeight={aboveContainersHeight}
        galleryContainerHeight={galleryContainerHeight}
      />
    </div>
  );
};

export default BottomContainer;

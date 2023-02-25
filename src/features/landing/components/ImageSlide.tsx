import { FunctionComponent, useEffect, useRef } from 'react';

import usePromises from '~/features/landing/hooks/usePromises';
import { fetchImage, startSlide } from '~/features/landing/helper';
import { PHOTO_PATH_PREFIX } from '~/features/landing/constants';
import { imageSlideElementList } from '~/features/landing/mocks';
import { resizeCanvasToCoverWindow } from '~/features/shared/utils/canvas';

const ImageSlide: FunctionComponent = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { data: images } = usePromises<HTMLImageElement>(
    imageSlideElementList.map((imageId) =>
      fetchImage(`${PHOTO_PATH_PREFIX}${imageId}?fm=webp`),
    ),
  );

  useEffect(() => {
    const canvas = ref.current;
    if (canvas === null) return;
    resizeCanvasToCoverWindow(canvas);
  }, []);

  useEffect(() => {
    if (images && ref.current) {
      startSlide(images, ref?.current);
    }
  }, [images]);

  return (
    <>
      {!images && <p className="landing-loading">loading</p>}
      <canvas className="image-slider" ref={ref} width="1920" height="1080" />
    </>
  );
};

export default ImageSlide;

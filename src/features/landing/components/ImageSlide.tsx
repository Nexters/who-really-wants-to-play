import { FunctionComponent, useEffect, useRef } from 'react';

import usePromises from '~/features/landing/hooks/usePromises';
import { fetchImage, startSlide } from '~/features/landing/helper';
import { imageSlideElementList } from '~/features/landing/mocks';
import { resizeCanvasToCoverWindow } from '~/features/shared/utils/canvas';
import { getFullImgUrl } from '~/features/shared/helpers';

type Props = {
  onStartImageSlide: (image: HTMLImageElement, idx: number) => void;
  onEndImageSlide: (image: HTMLImageElement, idx: number) => void;
};

const ImageSlide: FunctionComponent<Props> = ({
  onStartImageSlide,
  onEndImageSlide,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { data: images } = usePromises<HTMLImageElement>(
    imageSlideElementList.map((imageId) =>
      fetchImage(getFullImgUrl(imageId), {
        w: 1000,
      }),
    ),
  );

  useEffect(() => {
    const canvas = ref.current;
    if (canvas === null) return;
    resizeCanvasToCoverWindow(canvas);
  }, []);

  useEffect(() => {
    if (images && ref.current) {
      const ctx = ref.current.getContext('2d');
      if (ctx) ctx.fillStyle = 'transparent';

      startSlide(images, ref?.current, onStartImageSlide, onEndImageSlide);
    }
  }, [images]);

  return (
    <div className="landing-slider-container">
      {!images && <p className="landing-loading">loading</p>}
      <canvas
        className="landing-image-slider"
        ref={ref}
        width="1920"
        height="1080"
      />
    </div>
  );
};

export default ImageSlide;

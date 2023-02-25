import { FunctionComponent, useEffect, useRef } from 'react';

import usePromises from '~/features/landing/hooks/usePromises';
import { drawImageFrame, fetchImage } from '~/features/landing/helper';
import {
  DELAY,
  PHOTO_PATH_PREFIX,
  TRANSITION_SPEED,
} from '~/features/landing/constants';
import { imageSlideElementList } from '~/features/landing/mocks';
import { resizeCanvasToCoverWindow } from '~/features/shared/utils/canvasUtil';

const ImageSlide: FunctionComponent = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { data: images } = usePromises<HTMLImageElement>(
    imageSlideElementList.map((imageId) =>
      fetchImage(`${PHOTO_PATH_PREFIX}${imageId}?fm=webp`),
    ),
  );

  const startSlide = () => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !ctx || !images) return;

    const canvasSize = { width: canvas.width, height: canvas.height };

    const drawAnimationFrame = (dy: number) => {
      if (dy > canvas.height) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      images.forEach((image, idx) =>
        drawImageFrame(ctx, image, dy, DELAY * idx, canvasSize),
      );
      requestAnimationFrame(() => drawAnimationFrame(dy + TRANSITION_SPEED));
    };

    drawAnimationFrame(0);
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas === null) return;
    resizeCanvasToCoverWindow(canvas);

    const resizeHandler = () => resizeCanvasToCoverWindow(canvas);
    // TODO: debounce
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    if (images) startSlide();
  }, [images]);

  return (
    <canvas className="image-slider" ref={ref} width="1920" height="1080" />
  );
};

export default ImageSlide;
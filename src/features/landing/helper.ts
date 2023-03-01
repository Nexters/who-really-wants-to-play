import {
  IMAGE_SLIDE_ACC,
  IMAGE_SLIDE_DELAY,
  IMAGE_SLIDE_SPEED,
} from '~/features/landing/constants';
import { CanvasSize } from '~/features/landing/types';

export const fetchImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('image load error'));
  });
};

const calcYDistance = (dt: number, a: number): number => {
  return Math.floor((a * dt * dt) / 2);
};

const drawImageFrame = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  dt: number,
  delay: number,
  { width, height }: CanvasSize,
) => {
  if (dt - delay < 0) return;
  const dy = calcYDistance(dt - delay, IMAGE_SLIDE_ACC);
  if (dy > width + 3000) return;
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 15;

  const scaledH = (height / width) * img.width;
  const scaledDy = (dy / height) * scaledH;

  ctx.drawImage(
    img,
    0,
    (img.height + scaledH) / 2 - scaledDy,
    img.width,
    scaledH,
    0,
    height - dy,
    width,
    height,
  );
};

export const startSlide = (
  images: HTMLImageElement[],
  canvas: HTMLCanvasElement,
) => {
  const ctx = canvas?.getContext('2d', { alpha: false });
  if (!canvas || !ctx || !images) return;

  const canvasSize = { width: canvas.width, height: canvas.height };

  const drawAnimationFrame = (dy: number) => {
    if (dy > canvas.height) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    images.forEach((image, idx) =>
      drawImageFrame(ctx, image, dy, IMAGE_SLIDE_DELAY * idx, canvasSize),
    );
    requestAnimationFrame(() => drawAnimationFrame(dy + IMAGE_SLIDE_SPEED));
  };

  drawAnimationFrame(0);
};

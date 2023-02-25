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

const scaleToImagePx = (px: number, imgSize: number, canvasSize: number) =>
  (px / canvasSize) * imgSize;

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
  const dy = height - calcYDistance(dt - delay, IMAGE_SLIDE_ACC);
  if (dy > height) return;
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 15;
  ctx.drawImage(
    img,
    0,
    scaleToImagePx(dy, img.height, height),
    img.width,
    scaleToImagePx(img.height, img.height, height),
    0,
    dy,
    width,
    img.height,
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

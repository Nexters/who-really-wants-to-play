import {
  IMAGE_SLIDE_ACC,
  IMAGE_SLIDE_DELAY,
  IMAGE_SLIDE_SPEED,
  IMAGE_STAY_TERM,
} from '~/features/landing/constants';
import { CanvasSize } from '~/features/landing/types';
import { getUrlWithParam } from '~/features/shared/utils/url';

type ImageOption = { w?: number; h?: number; q?: number };

export const fetchImage = (src: string, options: ImageOption = {}) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = getUrlWithParam(src, { ...options, fm: 'webp' });
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('image load error'));
  });
};

export const calcYDistance = (dt: number, a: number): number => {
  return Math.floor((a * dt * dt) / 2);
};

const makeDelay = (now: number, target: number, term: number) => {
  if (now > target) return now;
  if (now > target - term) return target;
  else return now + term;
};

const drawImageFrame = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  dt: number,
  delay: number,
  { width, height }: CanvasSize,
  onStartImageSlide?: (image: HTMLImageElement) => void,
  onEndImageSlide?: (image: HTMLImageElement) => void,
) => {
  if (dt - delay < 0) return true;
  if (dt - delay < IMAGE_SLIDE_SPEED) onStartImageSlide?.(img);

  const dy = height - calcYDistance(dt - delay, IMAGE_SLIDE_ACC);
  if (dy < -height - IMAGE_STAY_TERM) {
    onEndImageSlide?.(img);
    return false;
  }
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 15;

  const scale = img.width / width;

  ctx.drawImage(
    img,
    0,
    makeDelay(dy * scale, 0, IMAGE_STAY_TERM * scale),
    img.width,
    height * scale,
    0,
    makeDelay(dy, 0, IMAGE_STAY_TERM),
    width,
    height,
  );

  return true;
};

export const startSlide = (
  images: HTMLImageElement[],
  canvas: HTMLCanvasElement,
  onStartImageSlide?: (image: HTMLImageElement, idx: number) => void,
  onEndImageSlide?: (image: HTMLImageElement, idx: number) => void,
) => {
  const ctx = canvas?.getContext('2d', { alpha: false });
  if (!canvas || !ctx || !images) return;

  const canvasSize = { width: canvas.width, height: canvas.height };

  const drawAnimationFrame = (dy: number) => {
    if (dy > canvas.height) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const results = images.map((image, idx) =>
      drawImageFrame(
        ctx,
        image,
        dy,
        IMAGE_SLIDE_DELAY * idx,
        canvasSize,
        (img: HTMLImageElement) => onStartImageSlide?.(img, idx),
        (img: HTMLImageElement) => onEndImageSlide?.(img, idx),
      ),
    );
    if (results.every((result) => !result)) return;

    requestAnimationFrame(() => drawAnimationFrame(dy + IMAGE_SLIDE_SPEED));
  };

  drawAnimationFrame(0);
};

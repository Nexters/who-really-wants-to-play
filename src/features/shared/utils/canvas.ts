export const resizeCanvasToCoverWindow = (canvas: HTMLCanvasElement) => {
  const scaleX = window.innerWidth / canvas.width;
  const scaleY = window.innerHeight / canvas.height;
  canvas.style.transform = `translate(-50%, -50%) scale(${Math.max(
    scaleX,
    scaleY,
  )})`;
};

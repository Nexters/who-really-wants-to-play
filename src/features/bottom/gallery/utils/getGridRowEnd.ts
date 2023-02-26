export const getGridRowEnd = (
  container: HTMLElement,
  targetElement: HTMLElement,
) => {
  const rowHeight = parseInt(
    getComputedStyle(container).getPropertyValue('grid-auto-rows'),
  );
  const rowGap = parseInt(getComputedStyle(container).getPropertyValue('gap'));
  const rowSpan = Math.ceil(
    (targetElement.offsetHeight + rowGap) / (rowHeight + rowGap),
  );

  return `span ${rowSpan}`;
};

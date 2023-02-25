export const getTransform = ({
  index,
  dailyBookIndex,
}: {
  index: number;
  dailyBookIndex: number;
}) => {
  const activeIndex = Math.floor(index > 0 ? index / 6 : 0);
  const stepValue = 90 - 45 * index + activeIndex * 360;
  const step = stepValue + dailyBookIndex * 45;
  return `rotate(${step}deg)`;
};

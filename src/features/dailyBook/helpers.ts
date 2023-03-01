import { MAX_DIAL_COUNT, ROTATE_DEGREE, START_DIAL_DEGREE } from './constants';

export const getTransform = ({
  index,
  dailyBookIndex,
}: {
  index: number;
  dailyBookIndex: number;
}) => {
  const activeIndex = Math.floor(index > 0 ? index / MAX_DIAL_COUNT : 0);
  const addAccCircle = activeIndex * 360;
  const stepValue = START_DIAL_DEGREE - ROTATE_DEGREE * index + addAccCircle;
  const nextDegree = stepValue + dailyBookIndex * ROTATE_DEGREE;
  return `rotate(${nextDegree}deg)`;
};

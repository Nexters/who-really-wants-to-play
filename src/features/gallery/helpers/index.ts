type UnitType = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%';
type Direction = 'X' | 'Y';

export const getTranslateValue = (
  dir: Direction,
  overflowedWidth: number,
  unit: UnitType,
) => `translate${dir}(${overflowedWidth}${unit})`;

export const getAnimationDir = (dir: number) => (dir % 2 === 0 ? -1 : 1);

export const getAnimationDirValue = (
  dir: -1 | 1,
  movingValue: number,
  animationRatio: number,
) => dir * movingValue * animationRatio;

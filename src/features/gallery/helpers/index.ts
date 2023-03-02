type UnitType = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%';

export const getMinusTranslateX = (overflowedWidth: number, unit: UnitType) =>
  `translateX(-${overflowedWidth}${unit})`;

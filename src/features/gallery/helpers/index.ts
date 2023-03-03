import { ZIGZAG_VALUE } from '../constants';

type UnitType = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%';
type Direction = 'X' | 'Y';

export const getMinusTranslateValue = (
  dir: Direction,
  overflowedWidth: number,
  unit: UnitType,
) => `translate${dir}(-${overflowedWidth}${unit})`;

export const getZigzagAnimationValue = (condition: boolean) =>
  condition ? ZIGZAG_VALUE : 0;

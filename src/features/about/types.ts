export type AboutContainerProps = {
  scrollValue: number;
};

type IntroKeys = 'titleOpacity' | 'titleOpacityOut' | 'titleLetterSpacing' | 'titleTop' | 'profileBoxPaddingTop';
export type IntroInfoValues = Record<IntroKeys, number>;
export type IntroInfoSettings = Record<IntroKeys, IntroProperty>;
export type IntroProperty = {
  startValue: number;
  endValue: number;
  startScroll?: number;
  endScroll?: number;
};

import { useEffect, useState } from 'react';

import { INTRO_SETTINGS } from '../constants';
import { IntroInfoValues, IntroProperty } from '../types';

export const useIntroInteraction = (scrollValue: number, aboutContainerScrollY: number) => {
  const [startIntroScrollY, setStartIntroScrollY] = useState<number>(0);
  const [introInfo, setIntroInfo] = useState<IntroInfoValues>({
    titleOpacity: 0,
    titleLetterSpacing: 0,
  });

  const viewHeight = window.innerHeight;
  useEffect(() => {
    setStartIntroScrollY(aboutContainerScrollY - viewHeight);
  }, [aboutContainerScrollY]);

  useEffect(() => {
    if (scrollValue < startIntroScrollY) return;
    if (scrollValue > aboutContainerScrollY) return;
    playIntroInteraction();
  }, [scrollValue]);

  const introScrollRatio =
    (startIntroScrollY - scrollValue) /
    (startIntroScrollY - aboutContainerScrollY);
  const calcValues = (settings: IntroProperty) => {
    let rv = 0;
    if (!settings.startScroll) {
      rv =
        introScrollRatio * (settings.endValue - settings.startValue) +
        settings.startValue;
      return rv;
    }
  
    const partScrollStart = settings.startScroll * scrollValue;
    const partScrollEnd = settings.endScroll * scrollValue;
    const partScrollHeight = partScrollEnd - partScrollStart;
    if (scrollValue >= partScrollStart && scrollValue <= partScrollEnd) {
      rv =
        ((scrollValue - partScrollStart) / partScrollHeight) *
          (settings.endValue - settings.startValue) +
        settings.startValue;
      return rv;
    }
    if (scrollValue < partScrollStart) {
      rv = settings.startValue;
      return rv;
    }
    if (scrollValue > partScrollEnd) {
      rv = settings.endValue;
      return rv;
    }
    return rv;
  };

  const playIntroInteraction = () => {
    setIntroInfo({
      titleOpacity: calcValues(INTRO_SETTINGS.titleOpacity),
      titleLetterSpacing: calcValues(INTRO_SETTINGS.titleLetterSpacing),
    });
  };
  
  return { introInfo };
};

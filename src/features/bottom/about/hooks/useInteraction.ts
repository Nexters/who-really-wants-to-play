import { useEffect, useState } from 'react';

import { INTRO_SETTINGS, PROFILES_REPEAT } from '../constants';
import { IntroInfoValues, IntroProperty } from '../types';

export const useIntroInteraction = (scrollValue: number, aboutContainerScrollY: number) => {
  const [startIntroScrollY, setStartIntroScrollY] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<number>(-1);
  const [selectedTop, setSelectedTop] = useState<number>(0);
  const [selectedJob, setSelectedJob] = useState<string>(PROFILES_REPEAT[0].job);
  const viewHeight = window.innerHeight;
  
  const [introInfo, setIntroInfo] = useState<IntroInfoValues>({
    titleOpacity: INTRO_SETTINGS.titleOpacity.startValue,
    titleLetterSpacing: INTRO_SETTINGS.titleLetterSpacing.startValue,
    titleTop: INTRO_SETTINGS.titleTop.startValue,
    boxPaddingTop: INTRO_SETTINGS.boxPaddingTop.startValue,
  });
  
  useEffect(() => {
    setStartIntroScrollY(aboutContainerScrollY - viewHeight);
  }, [aboutContainerScrollY]);
  
  
  useEffect(() => {
    if (scrollValue < startIntroScrollY) return;
    if (scrollValue < aboutContainerScrollY) {
      playIntroInteraction();
    }
  }, [scrollValue]);


  const useProfileBox = () => {
    useEffect(() => {
      console.log(aboutContainerScrollY, startIntroScrollY, scrollValue);
      if (!scrollValue) return;
      if (!(scrollValue > startIntroScrollY + 200)) {
        setSelectedName(-1);
        return;
      }

      for (let i = 0; i < PROFILES_REPEAT.length; i++) {
        let flag = 0;
        if (scrollValue < aboutContainerScrollY + (i * 200) + 200) {
          setSelectedName(i);
          setSelectedTop(-150 * i);
          setSelectedJob(PROFILES_REPEAT[i].job);
          flag = 1;
        }
        if (flag) return;
      }

      return;
    }, [scrollValue]);
  }
  useProfileBox();
  
  const introScrollRatio =
  (startIntroScrollY - scrollValue) /
  (startIntroScrollY - aboutContainerScrollY);

  const calcValue = (settings: IntroProperty) => {
    let rv = 0;
    if (typeof settings.startScroll === 'undefined' || typeof settings.endScroll === 'undefined') {
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
      titleOpacity: calcValue(INTRO_SETTINGS.titleOpacity),
      titleLetterSpacing: calcValue(INTRO_SETTINGS.titleLetterSpacing),
      titleTop: calcValue(INTRO_SETTINGS.titleTop),
      boxPaddingTop: calcValue(INTRO_SETTINGS.boxPaddingTop),
    });
  };
  
  return { introInfo, selectedName, selectedTop, selectedJob };
};

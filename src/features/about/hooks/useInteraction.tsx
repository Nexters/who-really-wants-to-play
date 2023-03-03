import { useEffect, useState } from 'react';

import { INTRO_SETTINGS, PROFILES_REPEAT } from '../constants';
import { IntroProperty } from '../types';

export const useIntroInteraction = (
  scrollValue: number,
  startIntroScrollY: number,
  aboutContainerScrollY: number,
) => {
  const [titleOpacity, setTitleOpacity] = useState<number>(
    INTRO_SETTINGS.titleOpacity.startValue,
  );
  const [titleLetterSpacing, setTitleLetterSpacing] = useState<number>(
    INTRO_SETTINGS.titleLetterSpacing.startValue,
  );
  const [titleTop, setTitleTop] = useState<number>(
    INTRO_SETTINGS.titleTop.startValue,
  );
  const [profileBoxPaddingTop, setProfileBoxPaddingTop] = useState<number>(
    INTRO_SETTINGS.profileBoxPaddingTop.startValue,
  );
  const [profileBoxOpacity, setProfileBoxOpacity] = useState<number>(
    INTRO_SETTINGS.titleOpacity.startValue,
  );

  const [selectedTop, setSelectedTop] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<number>(-1);
  const [selectedJob, setSelectedJob] = useState<string>(
    PROFILES_REPEAT[0].job,
  );

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

      if (
        scrollValue > aboutContainerScrollY &&
        scrollValue < aboutContainerScrollY + 200
      ) {
        setTitleOpacity(
          calcValue(introOutScrollRatio, INTRO_SETTINGS.titleOpacityOut),
        );
        setSelectedName(0);
        setSelectedTop(0);
        return;
      }

      if (scrollValue > aboutContainerScrollY + 200) {
        setTitleOpacity(0);
      }

      for (let i = 0; i < PROFILES_REPEAT.length + 1; i++) {
        let flag = 0;
        if (scrollValue < aboutContainerScrollY + i * 200 + 200) {
          console.log(
            scrollValue < aboutContainerScrollY + i * 200 + 200,
            aboutContainerScrollY + i * 200 + 200,
            '수식값이?',
          );
          setSelectedName(i);
          setSelectedTop(-150 * i);
          setSelectedJob(PROFILES_REPEAT[i].job);
          flag = 1;
        }
        if (flag) return;
      }
      return;
    }, [scrollValue]);
  };
  useProfileBox();

  const introScrollRatio =
    (startIntroScrollY - scrollValue) /
    (startIntroScrollY - aboutContainerScrollY);
  const introOutScrollRatio = (aboutContainerScrollY - scrollValue) / -200;

  const calcValue = (scrollRatio: number, settings: IntroProperty) => {
    let rv = 0;
    if (
      typeof settings.startScroll === 'undefined' ||
      typeof settings.endScroll === 'undefined'
    ) {
      rv =
        scrollRatio * (settings.endValue - settings.startValue) +
        settings.startValue;
      return rv;
    }

    // const partScrollStart = settings.startScroll * scrollValue;
    // const partScrollEnd = settings.endScroll * scrollValue;
    // const partScrollHeight = partScrollEnd - partScrollStart;
    // if (scrollValue >= partScrollStart && scrollValue <= partScrollEnd) {
    //   rv =
    //     ((scrollValue - partScrollStart) / partScrollHeight) *
    //       (settings.endValue - settings.startValue) +
    //     settings.startValue;
    //   return rv;
    // }
    // if (scrollValue < partScrollStart) {
    //   rv = settings.startValue;
    //   return rv;
    // }
    // if (scrollValue > partScrollEnd) {
    //   rv = settings.endValue;
    //   return rv;
    // }
    return rv;
  };

  const playIntroInteraction = () => {
    setTitleOpacity(calcValue(introScrollRatio, INTRO_SETTINGS.titleOpacity));
    setTitleLetterSpacing(
      calcValue(introScrollRatio, INTRO_SETTINGS.titleLetterSpacing),
    );
    setTitleTop(calcValue(introScrollRatio, INTRO_SETTINGS.titleTop));
    setProfileBoxPaddingTop(
      calcValue(introScrollRatio, INTRO_SETTINGS.profileBoxPaddingTop),
    );
    setProfileBoxOpacity(
      calcValue(introScrollRatio, INTRO_SETTINGS.titleOpacity),
    );
  };

  const interactionData = {
    titleOpacity,
    titleLetterSpacing,
    titleTop,
    profileBoxPaddingTop,
    profileBoxOpacity,
    selectedName,
    selectedTop,
    selectedJob,
  };
  return { ...interactionData };
};

import { useEffect, useState } from 'react';

import { INTRO_SETTINGS, PROFILES_REPEAT } from '../constants';
import { calcValue } from '../helpers';

export const useIntroInteraction = (
  scrollValue: number,
  startIntroScrollY: number,
  aboutContainerScrollY: number,
  lastProfileScrollY: number,
) => {
  const introScrollRatio =
    (startIntroScrollY - scrollValue) /
    (startIntroScrollY - aboutContainerScrollY);
  const introOutScrollRatio = (aboutContainerScrollY - scrollValue) / -200;

  const [titleOpacity, setTitleOpacity] = useState<number>(
    INTRO_SETTINGS.titleOpacity.startValue,
  );
  const [titleLetterSpacing, setTitleLetterSpacing] = useState<number>(
    INTRO_SETTINGS.titleLetterSpacing.startValue,
  );
  const [titleTop, setTitleTop] = useState<number>(
    INTRO_SETTINGS.titleTop.startValue,
  );
  const [imageOpacity, setImageOpacity] = useState<number>(
    INTRO_SETTINGS.titleOpacity.startValue,
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
  const [profileJobTop, setProfileJobTop] = useState<number>(1);
  const [imageTop, setImageTop] = useState<number>(50);
  const [endOpacity, setEndOpacity] = useState<number>(0);
  const [lineTop, setLineTop] = useState<number>(80);
  const [lineTextTop, setLineTextTop] = useState<number>(90);
  const [endTextBottom, setEndTextBottom] = useState<number>(-500);
  const [nameMarginLeft, setNameMarginLeft] = useState<number>(100);
  const [endTextRotate, setEndTextRotate] = useState<number>(40);

  useEffect(() => {
    if (scrollValue < startIntroScrollY) return;
    if (scrollValue < aboutContainerScrollY) {
      playIntroInteraction();
    }
    if (scrollValue > startIntroScrollY + 200) {
      playInteraction();
    }
    if (scrollValue > lastProfileScrollY) {
      playEndInteraction();
    }
  }, [scrollValue]);

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
    setNameMarginLeft(0);
  };

  const playInteraction = () => {
    setSelectedName(-1);
    if (scrollValue > startIntroScrollY + 150) {
      setSelectedName(0);
    }

    if (
      scrollValue > aboutContainerScrollY &&
      scrollValue < aboutContainerScrollY + 200
    ) {
      setTitleOpacity(
        calcValue(introOutScrollRatio, INTRO_SETTINGS.titleOpacityOut),
      );
      setImageOpacity(
        calcValue(introOutScrollRatio, INTRO_SETTINGS.titleOpacity),
      );
      setSelectedTop(0);
      return;
    }

    if (scrollValue > aboutContainerScrollY + 200) {
      setTitleOpacity(0);
      setImageOpacity(1);
    }

    for (let i = 0; i < PROFILES_REPEAT.length; i++) {
      let flag = 0;
      if (scrollValue < aboutContainerScrollY + i * 200 + 200) {
        setSelectedName(i);
        setSelectedTop(-150 * i);
        setSelectedJob(PROFILES_REPEAT[i].job);
        flag = 1;
      }
      if (flag) return;
    }
    return;
  };

  const playEndInteraction = () => {
    setSelectedName(PROFILES_REPEAT.length - 1);
    if (scrollValue <= lastProfileScrollY + 50) {
      setSelectedTop(-1650);
      setProfileJobTop(1);
      setImageTop(50);
      setEndOpacity(0);
      setLineTop(80);
      setLineTextTop(90);
      setEndTextBottom(-500);
      setEndTextRotate(40);
      return;
    }
    if (scrollValue > lastProfileScrollY + 200) {
      setSelectedTop(-2550);
      setProfileJobTop(0);
      setImageTop(-50);
      setEndOpacity(1);
      setLineTop(0);
      setLineTextTop(40);
      setEndTextBottom(-100);
      setEndTextRotate(0);
    }
  };

  const interactionData = {
    titleOpacity,
    titleLetterSpacing,
    titleTop,
    imageOpacity,
    profileBoxPaddingTop,
    profileBoxOpacity,
    selectedName,
    selectedTop,
    selectedJob,
    profileJobTop,
    imageTop,
    endOpacity,
    lineTop,
    lineTextTop,
    endTextBottom,
    nameMarginLeft,
    endTextRotate,
  };
  return { ...interactionData };
};

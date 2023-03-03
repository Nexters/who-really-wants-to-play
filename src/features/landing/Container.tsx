import React, { FunctionComponent, useState } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../shared/constants';

import ImageSlide from '~/features/landing/components/ImageSlide';
import LandingTitle from '~/features/landing/components/LandingTitle';
import { imageSlideElementList } from '~/features/landing/mocks';

type LandingContainerProps = AppData & {
  showLandingAnimation: boolean;
};

const LandingContainer: FunctionComponent<LandingContainerProps> = ({
  refList,
  showLandingAnimation,
}) => {
  const [canShowLanding, setCanShowLanding] = useState(!showLandingAnimation);

  const onStartImageSlide = (img: HTMLImageElement, idx: number) => {
    if (idx === imageSlideElementList.length - 1) {
      setCanShowLanding(true);
    }
  };

  return (
    <div
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.LANDING] = ef;
      }}
      data-id={PAGE_NAME.LANDING}
      className="landing-container scroll-snap"
    >
      {showLandingAnimation && (
        <ImageSlide onStartImageSlide={onStartImageSlide} />
      )}
      {canShowLanding && <LandingTitle />}
    </div>
  );
};

export default LandingContainer;

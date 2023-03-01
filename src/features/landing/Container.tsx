import React, { FunctionComponent, useState } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import ImageSlide from '~/features/landing/components/ImageSlide';
import Cover from '~/features/landing/components/Cover';
import { imageSlideElementList } from '~/features/landing/mocks';

type LandingContainerProps = AppData;

const LandingContainer: FunctionComponent<LandingContainerProps> = ({
  refList,
}) => {
  const [canShowLanding, setCanShowLanding] = useState(false);

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
      <ImageSlide onStartImageSlide={onStartImageSlide} />
      {canShowLanding && <Cover />}
    </div>
  );
};

export default LandingContainer;

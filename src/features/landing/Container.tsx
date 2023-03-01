import React, { FunctionComponent, useEffect, useState } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import ImageSlide from '~/features/landing/components/ImageSlide';
import { calcImageUpTime } from '~/features/landing/helper';
import Cover from '~/features/landing/components/Cover';

type LandingContainerProps = AppData;

const LandingContainer: FunctionComponent<LandingContainerProps> = ({
  refList,
}) => {
  const [canShowLanding, setCanShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setCanShowLanding(true),
      calcImageUpTime(window.innerHeight) * 20,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.LANDING] = ef;
      }}
      data-id={PAGE_NAME.LANDING}
      className="landing-container scroll-snap"
    >
      <ImageSlide />
      {canShowLanding && <Cover />}
    </div>
  );
};

export default LandingContainer;

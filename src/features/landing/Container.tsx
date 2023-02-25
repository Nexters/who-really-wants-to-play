import { FunctionComponent, useState } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import { LANDING_LAST_ANIMATION_NAME } from '~/features/landing/constants';
import ImageSlide from '~/features/landing/components/ImageSlide';

type LandingContainerProps = AppData;

const LandingContainer: FunctionComponent<LandingContainerProps> = ({
  refList,
}) => {
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [isTriggeredTransition, setTriggeredTransition] = useState(false);

  return (
    <div
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.LANDING] = ef;
      }}
      data-id={PAGE_NAME.LANDING}
      className="landing-container scroll-snap"
      onAnimationEnd={({ animationName }) => {
        if (animationName === LANDING_LAST_ANIMATION_NAME) setCanMoveNext(true);
      }}
      onWheel={() => canMoveNext && setTriggeredTransition(true)}
    >
      <ImageSlide />
    </div>
  );
};

export default LandingContainer;

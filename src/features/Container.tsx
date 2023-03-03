import classnames from 'classnames';
import { FunctionComponent } from 'react';

import { PAGE_NAME } from './shared/constants';
import { useScrollValue } from './shared/hooks/useScrollValue';
import useAppContainer from './shared/hooks/useAppContainer';
import LandingContainer from './landing/Container';
import DailyBookContainer from './dailyBook/Container';
import GalleryContainer from './gallery/Container';
import AboutContainer from './about/Container';

import useScrollMemory from '~/features/shared/hooks/useScrollMemory';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();
  const { activeIndex } = appData;
  const { GALLERY, ABOUT } = PAGE_NAME;
  const needScrollSnap = activeIndex !== GALLERY && activeIndex !== ABOUT;
  const scrollSnapContainer = needScrollSnap ? 'scroll-snap-container' : '';
  const { containerRef, scrollValue } = useScrollValue(activeIndex, false);

  const { yScroll } = useScrollMemory(containerRef);

  return (
    <div
      className={classnames('container', scrollSnapContainer)}
      ref={containerRef}
    >
      <LandingContainer {...appData} showLandingAnimation={yScroll === 0} />
      <DailyBookContainer {...appData} />
      <GalleryContainer {...appData} scrollValue={scrollValue} />
      <AboutContainer {...appData} scrollValue={scrollValue} />
    </div>
  );
};

export default AppContainer;

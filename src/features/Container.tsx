import classnames from 'classnames';
import { FunctionComponent } from 'react';

import DailyBookContainer from './dailyBook/Container';
import LandingContainer from './landing/Container';
import { PAGE_NAME } from './shared/constants';
import useAppContainer from './shared/hooks/useAppContainer';
import { useScrollValue } from './shared/hooks/useScrollValue';
import AboutContainer from './about/Container';
import GalleryContainer from './gallery/Container';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();
  const { activeIndex } = appData;
  const { GALLERY, ABOUT } = PAGE_NAME;
  const needScrollSnap = activeIndex !== GALLERY && activeIndex !== ABOUT;
  const scrollSnapContainer = needScrollSnap ? 'scroll-snap-container' : '';
  const { containerRef, scrollValue } = useScrollValue(
    activeIndex,
    needScrollSnap,
  );

  return (
    <div
      className={classnames('container', scrollSnapContainer)}
      ref={containerRef}
    >
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
      <GalleryContainer {...appData} scrollValue={scrollValue} />
      <AboutContainer {...appData} scrollValue={scrollValue} />
    </div>
  );
};

export default AppContainer;

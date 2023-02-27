import classnames from 'classnames';
import { FunctionComponent } from 'react';

import DailyBookContainer from './dailyBook/Container';
import GalleryContainer from './gallery/Container';
import LandingContainer from './landing/Container';
import { PAGE_NAME } from './shared/constants';
import useAppContainer from './shared/hooks/useAppContainer';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();
  const { containerRef, activeIndex } = appData;
  const { GALLERY, ABOUT } = PAGE_NAME;
  const needScrollSnap = activeIndex !== GALLERY && activeIndex !== ABOUT;
  const scrollSnapContainer = needScrollSnap ? 'scroll-snap-container' : '';

  return (
    <div
      className={classnames('container', scrollSnapContainer)}
      ref={containerRef}
    >
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
      <GalleryContainer {...appData} />
    </div>
  );
};

export default AppContainer;

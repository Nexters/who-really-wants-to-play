import { FunctionComponent } from 'react';

import DailyBookContainer from './dailyBook/Container';
import GalleryContainer from './gallery/Container';
import useAppContainer from './hooks/useAppContainer';
import LandingContainer from './landing/Container';

import DetailContainer from '~/features/detail/Container';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();

  return (
    <div className="scroll-snap-container">
      <DetailContainer {...appData} />
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
      <GalleryContainer {...appData} />
    </div>
  );
};

export default AppContainer;

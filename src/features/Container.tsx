import { FunctionComponent } from 'react';

import DailyBookContainer from './dailyBook/Container';
import useAppContainer from './hooks/useAppContainer';
import LandingContainer from './landing/Container';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();

  return (
    <div className="scroll-snap-container">
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
    </div>
  );
};

export default AppContainer;

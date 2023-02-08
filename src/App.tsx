import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import HomeContainer from '~/features/home/Container';
import LandingContainer from '~/features/landing/Container';
import './style/index.scss';

const App: FunctionComponent = () => {
  return (
    <>
      <LandingContainer />
      <HomeContainer />
    </>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

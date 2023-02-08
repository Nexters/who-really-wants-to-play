import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import './style/index.scss';
import LandingContainer from '~/features/landing/Container';

const App: FunctionComponent = () => {
  return (
    <>
      <LandingContainer />
    </>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

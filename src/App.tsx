import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import Gallery from './features/gallery';

import './style/index.scss';
import LandingContainer from '~/features/landing/Container';

const App: FunctionComponent = () => {
  return (
    <>
      <LandingContainer />
      <Gallery />
    </>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

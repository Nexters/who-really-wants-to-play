import AboutContainer from './features/about/Container';

import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import './style/index.scss';

const App: FunctionComponent = () => {
  return (
    <>
      <AboutContainer />
    </>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

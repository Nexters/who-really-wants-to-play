import Gallery from './features/gallery';

import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';

const App: FunctionComponent = () => {
  return <Gallery />;
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

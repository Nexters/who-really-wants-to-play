import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import AppContainer from './features/Container';
import './style/index.scss';

const App: FunctionComponent = () => {
  return <AppContainer />;
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

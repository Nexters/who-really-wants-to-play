import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.scss';

const App: FunctionComponent = () => {
  return <h1>Hello, World!</h1>;
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);

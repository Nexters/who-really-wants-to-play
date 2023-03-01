import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppContainer from './features/Container';

import './style/index.scss';

import DetailContainer from '~/features/detail/Container';

const App: FunctionComponent = () => {
  return <AppContainer />;
};

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/detail/:id', element: <DetailContainer /> },
]);

const root = createRoot(document.getElementById('app') as Element);
root.render(<RouterProvider router={router} />);

import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './style/index.scss';

import { YScrollProvider } from './features/shared/components/Context/YScrollContext';
import AppContainer from './features/Container';

import DetailContainer from '~/features/detail/Container';

const App: FunctionComponent = () => {
  return <AppContainer />;
};

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/detail/:id', element: <DetailContainer /> },
]);

const root = createRoot(document.getElementById('app') as Element);
root.render(
  <YScrollProvider>
    <RouterProvider router={router} />
  </YScrollProvider>,
);

import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import AppContainer from './features/Container';

import './style/index.scss';

import DetailContainer from '~/features/detail/Container';
import { YScrollProvider } from '~/features/shared/components/Context/YScrollContext';

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

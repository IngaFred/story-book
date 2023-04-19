import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './utils/rem';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './assets/styles/reset.scss';

import '@/assets/styles/variables.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);

reportWebVitals();

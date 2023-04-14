import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './utils/rem';
import './assets/styles/reset.scss';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);

reportWebVitals();

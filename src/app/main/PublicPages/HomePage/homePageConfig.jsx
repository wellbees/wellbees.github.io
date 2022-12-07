import { lazy } from 'react';

const HomePage = lazy(() => import('./HomePage'));

const homePageConfig = {
	routes: [
		{
			path: '',
			element: <HomePage />
		},
		{
			path: 'homepage',
			element: <HomePage />
		}
	]
};

export default homePageConfig;

import { Utils } from '@theme';
import { Navigate } from 'react-router-dom';
import errorConfigs from 'app/main/Errors/errorConfigs';
import publicPagesConfigs from 'app/main/PublicPages/publicPagesConfigs';

const routeConfigs = [...errorConfigs, ...publicPagesConfigs];

const routes = [
	...Utils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		element: <Navigate to="/" />
	},
	{
		path: '*',
		element: <Navigate to="/404" />
	}
];

export default routes;

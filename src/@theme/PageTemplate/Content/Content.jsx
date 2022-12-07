import { Suspense, memo, useContext } from 'react';
import AppContext from 'app/AppContext';
import { useRoutes } from 'react-router-dom';

const Content = () => {
	const appContext = useContext(AppContext);
	const { routes } = appContext;

	return (
		<div>
			<Suspense>{useRoutes(routes)}</Suspense>
		</div>
	);
};

export default memo(Content);

import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter, PageLayout } from '@theme';
import 'app/languages';
import routes from './configs/routesConfig';
import store from './store';
import AppContext from './AppContext';

const App = () => {
	return (
		<AppContext.Provider value={{ routes }}>
			<Provider store={store}>
				<BrowserRouter>
					<PageLayout />
				</BrowserRouter>
			</Provider>
		</AppContext.Provider>
	);
};

export default App;

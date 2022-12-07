import { memo } from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function PageTemplate(props) {
	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default memo(PageTemplate);

import { memo } from 'react';

import Header from './Header';
import Content from './Content';

function PageTemplate(props) {
	return (
		<div>
			<Header />
			<Content />
		</div>
	);
}

export default memo(PageTemplate);

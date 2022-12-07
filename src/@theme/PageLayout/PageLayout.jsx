import { memo } from 'react';
import { PageTemplate } from '@theme';

function PageLayout({ ...props }) {
	return <PageTemplate {...props} />;
}

export default memo(PageLayout);

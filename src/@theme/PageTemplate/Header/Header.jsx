import { memo } from 'react';
import Navigation from '../Navigation';

const Header = () => {
	return (
		<div className='mb-[54px] sm:mb-[62px]'>
			<Navigation />
		</div>
	);
};

export default memo(Header);

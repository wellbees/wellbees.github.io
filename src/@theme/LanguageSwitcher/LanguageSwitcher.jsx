import { allLanguages } from 'app/languages';
import { useDispatch } from 'react-redux';
import { setLanguage } from 'app/store/generalSettingsSlice';

function LanguageSwitcher() {
	const dispatch = useDispatch();

	return (
		<div className="flex">
			{allLanguages.map(item => (
				<div key={item.slug} className="mx-1 px-2 border-2" onClick={() => dispatch(setLanguage(item.slug))}>
					{item.title}
				</div>
			))}
		</div>
	);
}

export default LanguageSwitcher;

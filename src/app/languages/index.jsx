import i18next from 'i18next';
import tr from './tr';
import en from './en';

i18next.addResourceBundle('tr', 'translation', tr);
i18next.addResourceBundle('en', 'translation', en);

export const allLanguages = [
	{ title: 'Turkish', slug: 'tr' },
	{ title: 'English', slug: 'en' }
];

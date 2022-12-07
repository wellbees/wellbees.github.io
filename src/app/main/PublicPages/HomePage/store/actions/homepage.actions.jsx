import axios from 'axios';

export const GET_PUBLIC_HOMEPAGE_REPO_DATA = 'GET_PUBLIC_HOMEPAGE_REPO_DATA';
export const SET_PUBLIC_HOMEPAGE_REPO_PAGE = 'SET_PUBLIC_HOMEPAGE_REPO_PAGE';
export const SET_PUBLIC_HOMEPAGE_REPO_LOADING = 'SET_PUBLIC_HOMEPAGE_REPO_LOADING';

export const COMPANYNAME = 'Wellbees';
export const PERPAGE = 8;

export function setPublicHomePageRepoPage(page) {
	return { type: SET_PUBLIC_HOMEPAGE_REPO_PAGE, payload: page + 1 };
}
export function setPublicHomePageRepoLoading() {
	return { type: SET_PUBLIC_HOMEPAGE_REPO_LOADING };
}

export function getPublicHomePageRepoData(page) {
	const request = axios.get('https://api.github.com/search/repositories', {
		params: { q: `user:${COMPANYNAME}`, page, per_page: PERPAGE }
	});

	return dispatch => {
		dispatch(setPublicHomePageRepoPage(page));
		dispatch(setPublicHomePageRepoLoading());
		request.then(response => dispatch({ type: GET_PUBLIC_HOMEPAGE_REPO_DATA, payload: response.data }));
	};
}

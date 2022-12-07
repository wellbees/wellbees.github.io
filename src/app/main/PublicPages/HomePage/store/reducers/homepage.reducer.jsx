import * as Actions from '../actions';

const initialState = {
	currentRepoPage: 1,
	publicRepos: [],
	publicReposCount: null,
	isLoading: false
};

const pageAppReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_PUBLIC_HOMEPAGE_REPO_DATA: {
			return {
				...state,
				publicRepos: [...state.publicRepos, ...action?.payload?.items],
				publicReposCount: action?.payload?.total_count,
				isLoading: false
			};
		}
		case Actions.SET_PUBLIC_HOMEPAGE_REPO_PAGE: {
			return {
				...state,
				currentRepoPage: action.payload
			};
		}
		case Actions.SET_PUBLIC_HOMEPAGE_REPO_LOADING: {
			return {
				...state,
				isLoading: !state.isLoading
			};
		}
		default: {
			return state;
		}
	}
};

export default pageAppReducer;

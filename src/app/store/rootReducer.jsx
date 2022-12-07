import { combineReducers } from '@reduxjs/toolkit';
import generalSettings from './generalSettingsSlice';

const createReducer = asyncReducers => (state, action) => {
	const combinedReducer = combineReducers({
		generalSettings,
		...asyncReducers
	});

	/*
	Reset the redux store when user logged out
	 */
	if (action.type === 'userLoggedOut') {
		state = undefined;
	}

	return combinedReducer(state, action);
};

export default createReducer;

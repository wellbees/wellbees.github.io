import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18n';

const generalSettingsSlice = createSlice({
	name: 'generalSettings',
	initialState: {
		language: i18n.options.lng,
		routeMatched: null
	},
	reducers: {
		setRouteMatched: (state, action) => {
			state.routeMatched = action.payload;
		},
		setLanguage: (state, action) => {
			i18n.changeLanguage(action.payload);
			state.language = action.payload;
		}
	}
});

export const { setRouteMatched, setLanguage } = generalSettingsSlice.actions;

export default generalSettingsSlice.reducer;

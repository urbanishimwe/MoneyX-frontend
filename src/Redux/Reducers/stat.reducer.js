import Action from '../Actions';

const initialState = {
	convertedCurrencies: [],
	convertAll: false,
	convertAllCSS: 'alert-danger',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Action.GET_SINGLE_CONVERSION:
			return {
				...state,
				convertedCurrencies: payload,
				convertAll: true,
				convertAllCSS: 'alert-info',
			};
		case Action.GET_SINGLE_CONVERSION_ERROR:
			return { ...state, convertAllCSS: 'alert-danger', convertAll: false };
		default:
			return state;
	}
};

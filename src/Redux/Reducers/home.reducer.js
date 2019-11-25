import Action from '../Actions';

const initialState = {
	currencies: {},
	isCurrencies: false,
	currenciesError: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Action.GET_CURRENCIES:
			return { ...state, currencies: payload, isCurrencies: true };
		case Action.GET_CURRENCIES_ERROR:
			return { ...state, currenciesError: true };
		default:
			return state;
	}
};

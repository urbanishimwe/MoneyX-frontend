import Action from '../Actions';

const initialState = {
	from: 0,
	to: 0,
	convertError: false,
	convertErrorCSS: 'alert-info',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Action.GET_CONVERSION:
			return { ...state, from: payload.from, to: payload.to };
		case Action.GET_CONVERSION_ERROR:
			return { ...state, convertError: true, convertErrorCSS: 'alert-danger' };
		default:
			return state;
	}
};

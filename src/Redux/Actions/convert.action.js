import Actions from '.';
import request from '../../config';

export function postCurrencies(data) {
	return async dispatch => {
		try {
			const res = await request('post', data);
			if (res.status === 201) {
				const from = parseFloat(res.data.data.from);
				const to = parseFloat(res.data.data.to);
				dispatch({ type: Actions.GET_CONVERSION, payload: { from, to } });
			} else throw new Error(res.data);
		} catch (error) {
			dispatch({ type: Actions.GET_CONVERSION_ERROR, payload: {} });
		}
	};
}

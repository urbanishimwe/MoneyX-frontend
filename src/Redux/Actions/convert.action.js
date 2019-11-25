import Actions from '.';
import request from '../../config';

export function postCurrencies(data) {
	return async dispatch => {
		try {
			const res = await request('post', data);
			if (res.status === 201) {
				dispatch({ type: Actions.GET_CONVERSION, payload: res.data.data });
			} else throw new Error(res.data);
		} catch (error) {
			dispatch({ type: Actions.GET_CONVERSION_ERROR, payload: {} });
		}
	};
}

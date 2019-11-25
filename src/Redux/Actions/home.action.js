import Actions from '.';
import request from '../../config';

export function getCurrencies() {
	return async dispatch => {
		try {
			const res = await request('get', {});
			if (res.status === 200) {
				dispatch({ type: Actions.GET_CURRENCIES, payload: res.data.data });
			} else throw new Error(res.data);
		} catch (error) {
			dispatch({ type: Actions.GET_CURRENCIES_ERROR, payload: {} });
		}
	};
}

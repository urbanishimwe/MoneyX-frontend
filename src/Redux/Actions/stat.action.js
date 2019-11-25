import Actions from '.';
import request from '../../config';

export function postCurrency(data, from, money) {
	return async dispatch => {
		try {
			let payload = [];
			for (const single of data) {
				const res = await request('post', {
					from,
					to: single,
					money,
				});
				if (res.status === 201) {
					payload = [...payload, res.data.data.to];
				}
			}
			dispatch({ type: Actions.GET_SINGLE_CONVERSION, payload });
		} catch (error) {
			dispatch({ type: Actions.GET_SINGLE_CONVERSION_ERROR, payload: {} });
		}
	};
}

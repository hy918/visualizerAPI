import { INCREMENT, DECREMENT } from '@/reduxConfig/type';
import { fromJS } from 'immutable';

export const incrementAction = (data) => {
	return {
		type: INCREMENT,
		data: fromJS(data),
	};
};

export const decrementAction = (data) => {
	return {
		type: DECREMENT,
		data: fromJS(data),
	};
};

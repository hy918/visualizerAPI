import { INCREMENT, DECREMENT } from '@/reduxConfig/type';
import { fromJS } from 'immutable';

const initState = fromJS({
	count: 0,
});

const changeCount = (state = initState, action) => {
	const { type, data } = action;

	switch (type) {
		case INCREMENT:
			return state.set('count', fromJS(state.get('count') + data));
		case DECREMENT:
			return state.set('count', fromJS(state.get('count') - data));
		default:
			return state;
	}
};

export { changeCount };

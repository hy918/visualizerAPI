import { USERINFO } from '@/reduxConfig/type';
import { fromJS } from 'immutable';

export const changeUserInfo = (data) => {
	return {
		type: USERINFO,
		data: fromJS(data),
	};
};

import { USERINFO } from '@/reduxConfig/type';
import { fromJS } from 'immutable';

import { myLocalRedis } from '@/utils/cache';

const initState = fromJS({
	userInfo: myLocalRedis.get('userInfo') || {},
});

/**
 * @description 修改登录用户的信息
 */
export const changeUserInfo = (state = initState, action) => {
	switch (action.type) {
		case USERINFO:
			return state.set('taggerLang', fromJS(action.taggerLang));

		default:
			return state;
	}
};

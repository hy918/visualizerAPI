import { combineReducers } from 'redux-immutable';

import { changeCount } from './changeCount';
import { changeUserInfo } from './changeUserInfo';

export default combineReducers({ changeCount, changeUserInfo });

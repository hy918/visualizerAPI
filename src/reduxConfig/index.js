import { createStore, compose } from 'redux';

import rootReducer from './reducers';

// const composeEnhances = window

export default createStore(rootReducer);

import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';

import { Provider } from 'react-redux';
import store from './reduxConfig';
import setPrototypeOf from 'setprototypeof';
import 'antd/dist/antd.css';
import './index.css';
import './global.less';

import App from './pages/router';

Object.setPrototypeOf = setPrototypeOf;

ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
	document.getElementById('root')
);

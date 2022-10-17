import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import asyncComponent from '@/components/AsyncComponent';

const Workflow = asyncComponent(() => import('@/pages/Home/Workflow'));
const NotFound = asyncComponent(() => import('@/components/NotFound'));

const App = (props) => {
	return (
		<div>
			<Router>
				<Switch>
					<Redirect exact from="/" to="/home/graph-list" />
					<Route
						path="/home/workflow/create"
						render={() => <Workflow />}
					/>
					<Route render={() => <NotFound />} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

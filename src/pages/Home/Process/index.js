import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './List';
import ProcessNodeList from './Node';
import ProcessSideList from './Side';
import ProcessHistoryList from './History';
export default function index() {
	return (
		<div>
			<Routes>
				<Route path="/process" element={<List />} />
				<Route path="/node" element={<ProcessNodeList />} />
				<Route path="/side" element={<ProcessSideList />} />
				<Route path="/history" element={<ProcessHistoryList />} />
			</Routes>
		</div>
	);
}

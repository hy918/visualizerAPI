import React from 'react';
import { Routes, Route } from 'react-router-dom';

import FunctionApi from './FunctionApi';
import BasicApi from './BasicApi';
import ApiDetail from './ApiDetails';

const ApiManageMent = () => {
	return (
		<div>
			<Routes>
				<Route path="/function" element={<FunctionApi />}></Route>
				<Route path="/basic" element={<BasicApi />}></Route>
				<Route path="/apiDetail" element={<ApiDetail />} />
				<Route path="/" element={<FunctionApi />} />
			</Routes>
		</div>
	);
};
export default ApiManageMent;

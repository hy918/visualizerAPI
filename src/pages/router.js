import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/index';
import Login from './Login';

const App = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/home/*" element={<Home />} />
					<Route path="/login" element={<Login />} />

					<Route exact path="*" element={<Navigate to="/login" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;

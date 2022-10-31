import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataTableLocalList from './Local';
import DataTableNewImportList from './Import';
export default function index() {
	return (
		<div>
			<Routes>
				<Route path="/localconnect" element={<DataTableLocalList />} />
				<Route path="/import" element={<DataTableNewImportList />} />
			</Routes>
		</div>
	);
}

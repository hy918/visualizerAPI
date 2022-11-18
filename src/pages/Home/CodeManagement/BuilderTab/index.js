import { Tabs } from 'antd';
import React from 'react';
import Builder from '../Builder';
import Copy from './copy';
const BuilderTab = () => {
	return (
		<div>
			<Tabs
				defaultActiveKey="1"
				onChange={(e) => {
					console.log(e);
				}}
				items={[
					{
						label: `Builder`,
						key: '1',
						children: <Builder />,
					},
					{
						label: `copy Builder`,
						key: '2',
						children: <Copy />,
					},
				]}
			/>
		</div>
	);
};
export default BuilderTab;

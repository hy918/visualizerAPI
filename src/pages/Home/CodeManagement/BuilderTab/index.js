import React, { useState } from 'react';
import { Tabs } from 'antd';
import Builder from './Builder';
import Copy from './copy';
const BuilderTab = () => {
	const [tabKeys, setTabKeys] = useState('1');
	return (
		<div>
			<Tabs
				defaultActiveKey="1"
				activeKey={tabKeys}
				onChange={(e) => {
					setTabKeys(e);
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

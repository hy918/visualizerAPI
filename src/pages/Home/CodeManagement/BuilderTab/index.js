import React, { useState } from 'react';
import { Tabs } from 'antd';
import Builder from './Builder';
import Copy from './copy';
import Orm from '../Orm';
import JSON2SQL from './json2sql';
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
						label: `Json转对象`,
						key: '2',
						children: <Copy />,
					},
          {
            label: 'Orm',
            key: '3',
            children: <Orm />
          },
          {
            label: `Json转SQL`,
            key: '4',
            children: <JSON2SQL />,
          },
				]}
			/>
		</div>
	);
};

export default BuilderTab;

import { Modal } from 'antd';
import React, { memo } from 'react';

import './index.less';

const ModalDetail = (props) => {
	const { visible } = props;
	return <Modal open={visible}></Modal>;
};
export default memo(ModalDetail);

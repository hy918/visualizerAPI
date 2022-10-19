import { Button, Modal } from 'antd';
import React from 'react';

import './index.less';

const ModalDelete = (props) => {
	const { isModalOpen, handleCancel } = props;
	// 删除
	const handleOk = () => {};
	// 取消
	const onCancel = () => handleCancel();
	return (
		<Modal
			title="删除基础API"
			wrapClassName="delBasicModalRoot"
			visible={isModalOpen}
			footer={null}
		>
			<div className="modal-content">
				<div>确定要删除该删除功能API吗？</div>
				<div className="modal-footer">
					<Button onClick={onCancel} className="cancel-btn">
						取消
					</Button>
					<Button type="primary" onClick={handleOk}>
						确定
					</Button>
				</div>
			</div>
		</Modal>
	);
};
export default ModalDelete;

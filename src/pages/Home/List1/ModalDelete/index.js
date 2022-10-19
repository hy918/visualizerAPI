import { Button, message, Modal } from 'antd';
import React from 'react';
import funcApiServer from '@/services/functionApi';

import './index.less';

const ModalDelete = (props) => {
	const { isModalOpen, handleCancel, getTableData, id } = props;
	// 删除
	const handleOk = async () => {
		try {
			const res = await funcApiServer.funcApiDelete(id);
			if (res.code === 10200) {
				message.success('删除成功');
				getTableData({});
			}
		} catch (res) {}
	};
	// 取消
	const onCancel = () => handleCancel();
	return (
		<Modal
			title="删除功能API"
			wrapClassName="delmodalRoot"
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

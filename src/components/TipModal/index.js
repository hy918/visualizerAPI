import React from 'react';
import { Button, Modal } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

import './index.less';
const TipModal = ({
	maskClosable = false, // 点击蒙层是否关闭
	destroyOnClose = true,
	focusTriggerAfterClose = false, // 关闭后取消聚焦
	title,
	content,
	okText,
	cancelText,
	ok,
	onCancel,
	footer = true,
	...otherProps
}) => {
	const handleOk = (e) => {
		ok(e);
	};
	const onCancal = (e) => {
		onCancel(e);
	};
	return (
		<Modal
			className="my-tip-modal"
			width={430}
			footer={null}
			maskClosable={maskClosable}
			destroyOnClose={destroyOnClose}
			focusTriggerAfterClose={focusTriggerAfterClose}
			onCancel={onCancal}
			{...otherProps}
		>
			<div>
				<div className="my-modal-title">
					<div className="icon-box">
						<CloseCircleFilled />
					</div>
					<div className="text-box">{title}</div>
				</div>
				<div className="my-modal-content">{content}</div>
				{footer ? (
					<div className="my-modal-footer">
						<Button className="cancel-btn" onClick={() => onCancel()}>
							{cancelText || '取消'}
						</Button>
						<Button className="ok-btn" type="primary" onClick={() => handleOk()}>
							{okText || '确定'}
						</Button>
					</div>
				) : null}
			</div>
		</Modal>
	);
};
export default TipModal;

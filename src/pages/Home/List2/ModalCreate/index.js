import { Button, Form, Input, Modal } from 'antd';
import React from 'react';

import './index.less';
const ModalCreate = (props) => {
	const [form] = Form.useForm();
	const { isModalOpen, handleCancel, getTableData } = props;

	const handleOK = () => {};
	return (
		<div>
			<Modal
				title="添加基础API"
				wrapClassName="addBasicModalRoot"
				visible={isModalOpen}
				footer={null}
				onCancel={() => handleCancel()}
			>
				<div className="modal-content">
					<Form form={form}>
						<Form.Item
							name="method"
							label="http方法名"
							rules={[
								{
									required: true,
									message: '名字不能为空',
								},
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							name="path"
							label="http路径"
							rules={[
								{
									required: true,
									message: '名字不能为空',
								},
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							name="father_name"
							label="父级名字"
							rules={[
								{
									required: true,
									message: '类型不能为空',
								},
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							name="type"
							label="类型"
							rules={[
								{
									required: true,
									message: '类型不能为空',
								},
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							name="description"
							label="描述"
							rules={[
								{
									required: true,
									message: '描述不能为空',
								},
							]}
						>
							<Input></Input>
						</Form.Item>
					</Form>
				</div>
				<div className="modal-footer">
					<Button onClick={() => handleCancel()}>取消</Button>
					<Button
						type="primary"
						className="ok-btn"
						onClick={() => handleOK()}
					>
						确定
					</Button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalCreate;

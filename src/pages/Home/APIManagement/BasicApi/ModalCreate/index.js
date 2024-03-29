import { Button, Form, Input, message, Modal, Select } from 'antd';
import React from 'react';
import basicApiServer from '@/services/basicApi';

import './index.less';
const ModalCreate = (props) => {
	const [form] = Form.useForm();
	const { isModalOpen, handleCancel, getTableData } = props;

	const handleOK = () => {
		form.validateFields().then(async (values) => {
			try {
				const res = await basicApiServer.basicApiAdd(values);
				if (res?.code === 10200) {
					handleCancel();
          getTableData({});
          // todo 刷新页面的功能
					return message.success('添加成功');
				}
				message.error(res?.msg);
			} catch (err) {
				message.error('添加失败');
			}
		});
	};

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
					<Form
						form={form}
						initialValues={{
							type: 'api',
							method: 'GET',
							path: '/api/v1/',
						}}
					>
						<Form.Item
							name="method"
							label="http方法名"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Select>
								<Select.Option value="GET">GET</Select.Option>
								<Select.Option value="POST">POST</Select.Option>
								<Select.Option value="DELETE">DELETE</Select.Option>
								<Select.Option value="PUT">PUT</Select.Option>
								<Select.Option value="PATCH">PATCH</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="path"
							label="http路径"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Input placeholder="请输入http路径" autoComplete="on"></Input>
						</Form.Item>
						<Form.Item
							name="father_name"
							label="父级名字"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Input placeholder="请输入父级名字，若没有父级，则写入--" autoComplete="off"></Input>
						</Form.Item>
						<Form.Item
							name="type"
							label="类型"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Select>
								<Select.Option value="api">API</Select.Option>
								<Select.Option value="page">PAGE</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="description"
							label="描述"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Input.TextArea autoComplete="off"></Input.TextArea>
						</Form.Item>
					</Form>
				</div>
				<div className="modal-footer">
					<Button onClick={() => handleCancel()}>取消</Button>
					<Button type="primary" className="ok-btn" onClick={() => handleOK()}>
						确定
					</Button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalCreate;

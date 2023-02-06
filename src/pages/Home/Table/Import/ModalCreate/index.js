import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
import tableApiService from '@/services/tableApi';

import './index.less';
const ModalCreate = (props) => {
	const { TextArea } = Input;
	const [form] = Form.useForm();
	const { isModalOpen, handleCancel, getTableData } = props;

	const handleOK = () => {
		form.validateFields().then(async (values) => {
			try {
				const res = await tableApiService.importTable(values);
				if (res?.code === 10200) {
          handleCancel();
					getTableData({});
					return message.success('添加成功');
				}
        handleCancel();
        message.error(res?.msg);
			} catch (err) {
        handleCancel();
        message.error('添加失败');
			}
		});
	};

	return (
		<div>
			<Modal
				title="上传建表语句"
				wrapClassName="addBasicModalRoot"
				visible={isModalOpen}
				footer={null}
				onCancel={() => handleCancel()}
			>
				<div className="modal-content">
					<Form
						form={form}
						initialValues={{ type: 'api', method: 'PUT' }}
					>
						<Form.Item
							name="sql"
							label="建表语句"
							rules={[
								{
									required: true,
									message: '建表语句必须填写',
								},
							]}
						>
							<TextArea rows={4} placeholder="请输入SQL"/>
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

import React, { memo, useState, useEffect } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import buildCodeService from '@/services/buildCodeService';

import './index.less';

const ModalDetail = (props) => {
	const { editVisible, id, onCancal } = props;
	const [information, setInformation] = useState({
		name: '这是应该名字',
		code: 'hvhiuvhivh',
		target_code: 'hhhhhhh',
	});
	const [form] = Form.useForm();

	useEffect(() => {
		if (editVisible) {
			getData();
		}
	}, [editVisible]);

	// 获取详情数据
	const getData = async () => {
		try {
			const res = await buildCodeService.buildCodeInfo({ id });
			if (res?.code === 10200) {
				const { data } = res || {};
				form.setFieldsValue(data);
			}
		} catch (err) {
			//
		}
	};

	// 编辑代码
	const editCode = () => {
		form.validateFields().then(async (values) => {
			try {
				const data = { id, code: values?.code };
				const res = await buildCodeService.buildCodeEdit(data);
				if (res?.code === 10200) {
					const { target_code } = res?.data;
					form.setFieldsValue({ target_code });
				}
			} catch (err) {
				//
			}
		});
	};

	// 下载代码
	const downloadCode = async () => {
		try {
			await buildCodeService.buildCodeDownload(id);
		} catch (err) {
			message.error(err);
		}
	};
	const ModalContent = () => {
		return (
			<Form form={form} layout="vertical" initialValues={information}>
				<Form.Item name="name" label="名字">
					<Input disabled></Input>
				</Form.Item>
				<div className="g-align-center">
					<Form.Item name="code" label="原始代码" className="code">
						<Input.TextArea rows={16}></Input.TextArea>
					</Form.Item>
					<Button
						// type="primary"
						onClick={() => editCode()}
						className="g-ml-2 g-mr-2"
					>
						{/* 编辑代码 */}
						<DoubleRightOutlined />
					</Button>
					<Form.Item name="target_code" label="生成的代码" className="code">
						<Input.TextArea disabled rows={16}></Input.TextArea>
					</Form.Item>
				</div>
				<div className="targetCode">
					<Button type="primary" onClick={downloadCode}>
						下载
					</Button>
				</div>
			</Form>
		);
	};

	return (
		<Modal
			open={editVisible}
			title="查看"
			width={680}
			footer={null}
			wrapClassName="builderModalRoot"
			maskClosable={false}
			destroyOnClose={true}
			focusTriggerAfterClose={false}
			onCancel={onCancal}
		>
			<ModalContent />
		</Modal>
	);
};
export default memo(ModalDetail);

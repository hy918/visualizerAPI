import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Form, Input, message, Modal, Tag, Radio } from 'antd';
import buildCodeService from '@/services/buildCodeService';
import UploadFile from '@/components/UploadFile';

import './style.less';

const ModalAdd = (props) => {
	const [form] = Form.useForm();
	const { isModalOpen, handleCancel, ok } = props;
	const [fileOrString, setFileOrString] = useState('file');

	const handleOK = () => {
		form.validateFields().then(async (values) => {
			try {
				const { class_name, code, code_file } = values;
				const data = {
					class_name,
					code: code || '',
					code_file: code_file || '',
				};
				const res = await buildCodeService.buildCodeCreate(data);
				if (res?.code === 10200) {
					ok();
					handleCancel();
					return message.success('添加成功');
				}
				message.error(res?.msg);
			} catch (err) {
				console.log('错误', err);
				message.error('添加失败');
			}
		});
	};

	const onCallBack = (file) => {
		form.setFieldsValue({ code_file: file });
	};

	// 删除文件
	const deleteFile = () => {
		form.setFieldsValue({ code_file: '' });
	};

	return (
		<div>
			<Modal
				title="添加"
				wrapClassName="addBuildModalRoot"
				visible={isModalOpen}
				footer={null}
				destroyOnClose={true}
				onCancel={() => handleCancel()}
			>
				<div className="modal-content">
					<Form
						form={form}
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 20 }}
						initialValues={{
							code_type: fileOrString,
						}}
					>
						<Form.Item
							name="class_name"
							label="类名"
							rules={[
								{
									required: true,
									message: '不能为空',
								},
							]}
						>
							<Input autoComplete="off"></Input>
						</Form.Item>
						<Form.Item name="code_type" label="代码类型">
							<Radio.Group
								onChange={(e) => {
									setFileOrString(e?.target?.value);
								}}
							>
								<Radio value="string"> 字符串 </Radio>
								<Radio value="file"> 文件 </Radio>
							</Radio.Group>
						</Form.Item>
						{fileOrString === 'string' ? (
							<Form.Item name="code" label="代码字符串">
								<Input.TextArea
									placeholder="请输入代码字符串"
									rows={6}
								></Input.TextArea>
							</Form.Item>
						) : (
							<Form.Item
								name="code_file"
								label="代码文件"
								extra="一次上传一个类型为txt或者java的文件"
							>
								<UploadFile
									accept="text/plain,.java"
									limitCount={1}
									onCallBack={onCallBack}
									renderBtn={(value) => {
										return (
											<div className="file-online">
												{_.isEmpty(value) ? (
													<span>请选择代码文件</span>
												) : (
													<Tag
														className="tag-style"
														closable
														onClose={deleteFile}
													>
														<span className="file-name">
															{value?.name}
														</span>
													</Tag>
												)}
											</div>
										);
									}}
								/>
							</Form.Item>
						)}
					</Form>
				</div>
				<div className="modal-footer">
					<Button onClick={() => handleCancel()}>取消</Button>
					<Button
						type="primary"
						className="g-ml-2"
						onClick={() => handleOK()}
					>
						确定
					</Button>
				</div>
			</Modal>
		</div>
	);
};
export default ModalAdd;

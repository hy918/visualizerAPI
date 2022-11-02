import React from 'react';
import { Button, Form, Input } from 'antd';
import { myLocalRedis } from '@/utils/cache';
import { useNavigate } from 'react-router-dom';

import userImage from '@/assets/image/dengluzhanghu.svg';
import passImage from '@/assets/image/mima.svg';

import './index.less';
const Login = (props) => {
	const [form] = Form.useForm();
	const history = useNavigate();

	const onFinish = () => {
		form.validateFields().then(async (values) => {
			const { username, password } = values;
			try {
				// 验证用户名密码

				// 通过
				myLocalRedis.setWithTTL('password', password, 10 * 60 * 60);
				myLocalRedis.setWithTTL('username', username, 10 * 60 * 60);

				// 跳转到api页面
				history('/home/apiManage/function');
			} catch (err) {}
		});
	};
	return (
		<div className="loginRoot">
			<div className="loginbox">
				<h2 className="title">api后台管理</h2>
				<Form
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					autoComplete="off"
					form={form}
					layout="vertical"
				>
					<Form.Item
						// label="用户名"
						name="username"
						rules={[
							{
								required: true,
								message: '请输入用户名!',
							},
						]}
					>
						<Input
							className="input"
							placeholder="请输入用户名"
							prefix={
								<img
									src={userImage}
									alt="用户名"
									className="icon"
								/>
							}
						/>
					</Form.Item>

					<Form.Item
						// label="密码"
						name="password"
						rules={[
							{
								required: true,
								message: '请输入密码',
							},
						]}
					>
						<Input.Password
							className="input"
							placeholder="请输入密码"
							prefix={
								<img
									src={passImage}
									alt="密码"
									className="icon"
								/>
							}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="summit-btn"
						>
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;

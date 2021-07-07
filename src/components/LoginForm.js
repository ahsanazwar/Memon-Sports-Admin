import React from 'react';
import { Row, Col, Layout, Switch, Button } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
const LoginForm = (props) => {
	return (
		<Content>
			<div className="contact-form register-form">
				<div className="">
					<Row>
						<Col md={12} xs={24}> 
							<Form
								onSubmit={props.onSubmit}
								validate={props.validate}
								render={({ handleSubmit }) => (
									<form onSubmit={handleSubmit} id="login-form" className="text-left">
										<h2>{props.title}</h2>
										<span>Login by <Switch className="m-l-5" checkedChildren="Email" unCheckedChildren="Phone" defaultChecked onChange={props.loginTypeHandler}/></span>
										
										{
											props.loginType ? <Field
											name="email"
											component="input"
											placeholder="Email Address*"
										>
											{({ input, meta }) => (
												<div>
													<label>Email</label>
													<input
														type="email"
														placeholder="Enter Email Address*"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field> : <Field
											name="phone"
											component="input"
											placeholder="Phone Number *"
										>
											{({ input, meta }) => (
												<div>
													<label>Phone</label>
													<input
														type="text"
														placeholder="Enter Phone Number *"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field>
										}
										

										

										<Field
											name="password"
											component="input"
											placeholder="password"
										>
											{({ input, meta }) => (
												<div>
													<label>Password</label>
													<input
														type="password"
														placeholder="Enter Password*"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field>
										<p className="forget-label">
											{props.title != 'admin' && <Link to="/registration">Not Registered Yet?</Link>}
											{/* <Link to="/forget-password-email">Forgot Password?</Link> */}
										</p>
										<span>{props.loginError}</span>
										<Button loading={props.apiLoading} htmlType="submit">
											Login
										</Button>
									</form>
								)}
							/>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
};

export default withTheme(LoginForm);

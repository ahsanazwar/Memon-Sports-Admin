import React from 'react';
import { Row, Col, Layout } from 'antd';
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
									<form onSubmit={handleSubmit} id="login-form">
										<h2>Login to access your Account</h2>
										<Field
											name="email"
											component="input"
											placeholder="Email Address*"
										>
											{({ input, meta }) => (
												<div>
													<label>Email</label>
													<input
														type="text"
														placeholder="Enter Email Address*"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field>

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
											<Link to="/register">Not Registered Yet?</Link>
											<Link to="/forget-password-email">Forgot Password?</Link>
										</p>
										<span>{props.loginError}</span>
										<button className="thm-btn bg-cl-1" type="submit">
											Login
										</button>
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

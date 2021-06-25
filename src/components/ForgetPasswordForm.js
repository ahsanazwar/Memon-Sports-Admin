import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
const ForgetPasswordForm = (props) => {
	return (
		<Content>
			<div className="contact-form register-form padding-form">
				<Row justify="">
					<Col md={12}>
						<Form
							onSubmit={props.onSubmit}
							validate={props.validate}
							initialValues={props.initialValues}
							render={({ handleSubmit }) => (
								<form onSubmit={handleSubmit} id="register-form">
									<h2>Reset Password</h2>
									<Field
										name="newPassword"
										component="input"
										placeholder="newPassword *"
									>
										{({ input, meta }) => (
											<div>
												<label>New Password</label>
												<input
													type="password"
													placeholder="Enter New Password*"
													{...input}
												/>
												{meta.touched && meta.error && (
													<span>{meta.error}</span>
												)}
											</div>
										)}
									</Field>
									<Field
										name="confirmNewPassword"
										component="input"
										placeholder="confirmNewPassword *"
									>
										{({ input, meta }) => (
											<div>
												<label>Confirm New Password</label>
												<input
													type="password"
													placeholder="Enter Current Password*"
													{...input}
												/>
												{meta.touched && meta.error && (
													<span>{meta.error}</span>
												)}
											</div>
										)}
									</Field>
									<p className="success-message">{props.successMessage}</p>
									<button className="thm-btn bg-cl-1" type="submit">
										{props.isLoading}
									</button>
								</form>
							)}
						/>
					</Col>
				</Row>
			</div>
		</Content>
	);
};

export default withTheme(ForgetPasswordForm);

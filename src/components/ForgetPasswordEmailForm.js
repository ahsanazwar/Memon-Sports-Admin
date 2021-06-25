import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
const ForgetPasswordEmailForm = (props) => {
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
									<h2>Forget Password</h2>
									<p>Please enter your email address to reset your password.</p>
									<Field name="email" component="input" placeholder="Email*">
										{({ input, meta }) => (
											<div>
												<label>Email</label>
												<input
													type="text"
													{...input}
													placeholder="Enter your email address"
												/>
												{meta.touched && meta.error && (
													<span>{meta.error}</span>
												)}
											</div>
										)}
									</Field>
									<p className="success-message">{props.successMessage}</p>
									<span>{props.loginError}</span>
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

export default withTheme(ForgetPasswordEmailForm);

import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
// import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
const VerifyForm = (props) => {
	return (
		<Content>
			<div className="contact-form register-form">
				<div className="">
					<Row justify="">
						<Col md={12} xs={24}>
							<Form
								onSubmit={props.onSubmit}
								validate={props.validate}
								render={({ handleSubmit }) => (
									<form onSubmit={handleSubmit} id="login-form">
										<h2>Verify Your Account</h2>
										<p>{props.subHead}</p>
										<Field
											name="code"
											component="input"
											placeholder="Type Code"
										>
											{({ input, meta }) => (
												<div>
													<label>Token</label>
													<input
														type="text"
														placeholder="Enter Token*"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field>
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
			</div>
		</Content>
	);
};

export default withTheme(VerifyForm);

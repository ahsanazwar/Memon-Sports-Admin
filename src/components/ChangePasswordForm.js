import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';
const { Content } = Layout;
function ChangePasswordForm(props) {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="contact-form register-form">
					<div className="site-container">
						<Row justify="">
							<Col md={12}>
								<Form
									onSubmit={props.onSubmit}
									validate={props.validate}
									render={({ handleSubmit }) => (
										<form onSubmit={handleSubmit} id="register-form">
											<h2>Change Password</h2>
											<Field
												name="oldPassword"
												component="input"
												placeholder="Password*"
											>
												{({ input, meta }) => (
													<div>
														<label>Old Password*</label>
														<input
															type="password"
															placeholder="Enter Old Password*"
															{...input}
														/>
														{meta.touched && meta.error && (
															<span>{meta.error}</span>
														)}
													</div>
												)}
											</Field>
											<Field name="newPassword" component="input">
												{({ input, meta }) => (
													<div>
														<label>New Password*</label>
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
											<Field name="retype_password" component="input">
												{({ input, meta }) => (
													<div>
														<label>Retype New Password*</label>
														<input
															type="password"
															placeholder="Retype New Password*"
															{...input}
														/>
														{meta.touched && meta.error && (
															<span>{meta.error}</span>
														)}
													</div>
												)}
											</Field>
											<button className="thm-btn bg-cl-1" type="submit">
												Update
											</button>
										</form>
									)}
								/>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
}

export default withTheme(ChangePasswordForm);

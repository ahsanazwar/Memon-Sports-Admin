import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
const { Content } = Layout;
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Field } from 'react-final-form';
function EditProfileForm(props) {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="contact-form">
					<div className="site-container">
						<Row justify="center">
							<Col md={12}>
								<Form
									onSubmit={props.onSubmit}
									validate={props.validate}
									render={({ handleSubmit }) => (
										<form
											onSubmit={handleSubmit}
											id="editprofile-form"
											autoComplete="off"
										>
											<div className="dp-upload">
												<div className="sidebar-dp">
													<img src={props.image} alt="Awesome Footer Logo" />
												</div>
												<span className="camera-link">
													<Link>
														<FontAwesomeIcon icon={faCamera} />
													</Link>
													<input
														onChange={props.onFileUpload}
														type="file"
														accept="image/*"
														placeholder="Enter First Name*"
													/>
												</span>
											</div>
											<Row justify="center" gutter={30}>
												<Col className="gutter-row" md={12}>
													<Field name="firstName" component="input">
														{({ meta }) => (
															<div>
																<label>First Name</label>
																<input
																	type="text"
																	placeholder="Enter First Name *"
																	value={props.userName
																		.split(' ')
																		.slice(0, -1)
																		.join(' ')}
																	readOnly={true}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
												</Col>
												<Col className="gutter-row" md={12}>
													<Field
														name="lastName"
														component="input"
														placeholder="Last Name *"
													>
														{({ input, meta }) => (
															<div>
																<label>Last Name*</label>
																<input
																	type="text"
																	placeholder="Enter Last Name*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
												</Col>
											</Row>

											<Field name="occupation" component="input">
												{({ input, meta }) => (
													<div>
														<label>Occupation</label>
														<input
															type="text"
															placeholder="Occupation*"
															autoComplete="no"
															{...input}
														/>
														{meta.touched && meta.error && (
															<span>{meta.error}</span>
														)}
													</div>
												)}
											</Field>
											<Field
												name="oldPassword"
												component="input"
												placeholder="Password*"
											>
												{({ input, meta }) => (
													<div>
														<label>Old Password*</label>
														<input
															autoComplete="new-password"
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
											<Row justify="center" gutter={30}>
												<Col className="gutter-row" md={12}>
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
												</Col>
												<Col className="gutter-row" md={12}>
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
												</Col>
											</Row>
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

export default withTheme(EditProfileForm);

import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
function CardSection(props) {
	return (
		<Content>
			<div className="contact-form con-res">
				<div className="site-container">
					<Row justify="center">
						<Col md={12} xs={24}>
							<Form
								onSubmit={props.onSubmit}
								validate={props.validate}
								render={({ handleSubmit }) => (
									<form onSubmit={handleSubmit} id="register-form">
										<h2>Credit Card Info</h2>
										<ul className="card-logos">
											<li>
												<img
													src={'../../public/images/cards-svg/visa.svg'}
													alt="Awesome Logo"
												/>
											</li>
											<li>
												<img
													src={'../../public/images/cards-svg/mastercard.svg'}
													alt="Awesome Logo"
												/>
											</li>
											<li>
												<img
													src={'../../public/images/cards-svg/unionpay.svg'}
													alt="Awesome Logo"
												/>
											</li>
											<li>
												<img
													src={'../../public/images/cards-svg/amex.svg'}
													alt="Awesome Logo"
												/>
											</li>
											<li>
												<img
													src={'../../public/images/cards-svg/maestro.svg'}
													alt="Awesome Logo"
												/>
											</li>
										</ul>
										<Field name="cardNumber" component="input">
											{({ input, meta }) => (
												<div>
													<label>Card Number*</label>
													<input
														maxLength={16}
														type="number"
														onInput={(e) =>
															(e.target.value = e.target.value.slice(0, 16))
														}
														placeholder="0000 0000 0000 0000"
														{...input}
													/>
													{meta.touched && meta.error && (
														<span>{meta.error}</span>
													)}
												</div>
											)}
										</Field>

										<Row justify="center" gutter={30}>
											{/* <Col className="gutter-row" md={12} xs={24}>
												<label>Expiry Date*</label>
												<DatePicker
													className="extend-date-picker"
													onChange={props.onDateChange}
													disabledDate={(d) => d.isBefore(new Date())}
												/>
											</Col> */}
											<Col className="gutter-row" md={6} xs={24}>
												<Field name="month" component="input">
													{({ input, meta }) => (
														<div>
															<label>Expiry Month*</label>
															<input
																maxLength={2}
																onInput={(e) =>
																	(e.target.value = e.target.value.slice(0, 2))
																}
																type="text"
																placeholder="Month*"
																{...input}
															/>
															{meta.touched && meta.error && (
																<span>{meta.error}</span>
															)}
														</div>
													)}
												</Field>
											</Col>
											<Col className="gutter-row" md={6} xs={24}>
												<Field name="year" component="input">
													{({ input, meta }) => (
														<div>
															<label>Expiry Year*</label>
															<input
																maxLength={4}
																onInput={(e) =>
																	(e.target.value = e.target.value.slice(0, 4))
																}
																type="text"
																placeholder="Year*"
																{...input}
															/>
															{meta.touched && meta.error && (
																<span>{meta.error}</span>
															)}
														</div>
													)}
												</Field>
											</Col>

											<Col className="gutter-row" md={12} xs={24}>
												<Field name="cvc" component="input">
													{({ input, meta }) => (
														<div>
															<label>CVC/CVV*</label>
															<input
																maxLength={4}
																type="password"
																placeholder="CVC/CVV*"
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

										<p className="success-message">{props.successMessage}</p>
										<button className="thm-btn bg-cl-1" type="submit">
											{props.isLoading}
										</button>
									</form>
								)}
							/>
							{/* <form action="" id="contact-form">
								<input type="text" name="name" placeholder="Name*" />

								<Row justify="center" gutter={30}>
									<Col className="gutter-row" md={12} xs={24}>
										<input type="text" name="mail" placeholder="Email*" />
									</Col>
									<Col className="gutter-row" md={12} xs={24}>
										<input type="text" name="phnumber" placeholder="Phone" />
									</Col>
								</Row>
								<textarea name="message" placeholder="Your Message..." />
								<button className="thm-btn bg-cl-1" type="submit">
									Send Message
								</button>
							</form> */}
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(CardSection);

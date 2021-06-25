import React from 'react';
import { Row, Col, Layout, DatePicker } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';
const { Content } = Layout;
function TraditionalForm(props) {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="contact-form">
					<div className="site-container">
						<Row justify="center">
							<Col md={12}>
								<h2>Traditional Public Circle</h2>
								<Form
									onSubmit={props.onSubmit}
									validate={props.validate}
									initialValues={{
										monthPlan: 'six',
										monthGroup: 'six',
										packageType: 'public',
									}}
									render={({ handleSubmit }) => (
										<form
											onSubmit={handleSubmit}
											action="/traditional-cycle"
											id="trational-form"
										>
											<Field name="nameCircleOwner" component="input">
												{({ input }) => (
													<div>
														<label>Name Of Circle Owner*</label>
														<input
															type="text"
															placeholder="Enter Name Of Circle Owner*"
															{...input}
														/>
														<span>{props.nameCircleOwnerError}</span>
													</div>
												)}
											</Field>
											<label>Month*</label>
											<div className="checkbox-wrap">
												<Field name="monthPlan" type="radio" value="six">
													{({ input }) => {
														return (
															<>
																<input
																	name={input.name}
																	type="radio"
																	value="six"
																	checked={input.checked}
																	onChange={input.onChange}
																/>
																<label htmlFor="six">6 Months</label>
															</>
														);
													}}
												</Field>
												<Field name="monthPlan" type="radio" value="twileve">
													{({ input }) => {
														return (
															<>
																<input
																	name={input.name}
																	type="radio"
																	value="twileve"
																	checked={input.checked}
																	onChange={input.onChange}
																/>
																<label htmlFor="twileve">12 Months</label>
															</>
														);
													}}
												</Field>
											</div>

											<label>Plan*</label>
											<p className="plan-text">{props.checkedIt}</p>
											<div className="amount-field-wrap">
												<div className="amount-field">
													{/* <Field name="circleAmount" component="select">
														{({ input, meta }) => ( 
															 <div> */}
													<label>Cycle Amount</label>
													<Field
														name="circleAmount"
														component="select"
														className="amountDropsown"
														// onChange={props.calculateAmount}
													>
														<option disabled={true} value="">
															Select Cycle Amount
														</option>
														<option value="100">100</option>
														<option value="150">150</option>
														<option value="200">200</option>
														<option value="250">250</option>
														<option value="300">300</option>
														<option value="350">350</option>
														<option value="400">400</option>
														<option value="450">450</option>
														<option value="500">500</option>
														<option value="550">550</option>
														<option value="600">600</option>
														<option value="650">650</option>
														<option value="700">700</option>
														<option value="750">750</option>
														<option value="800">850</option>
														<option value="900">900</option>
														<option value="950">950</option>
														<option value="1000">1000</option>
													</Field>
													<span>{props.amountError}</span>
													<p className="totalAmountStyle">
														Receiving Amount: ${props.totalAmount}
													</p>
													<label>Select Time Slot</label>
													<Field
														name="circleTime"
														component="select"
														className="amountDropsown"
														// onChange={props.calculateAmount}
													>
														{/* <option value="0">0</option> */}
														<option disabled={true} value="">
															Select Time Slot
														</option>
														<option value="1">12:00am to 3:00am</option>
														<option value="2">3:00am to 6:00am</option>
														<option value="3">6:00am to 9:00am</option>
														<option value="4">9:00am to 12:00pm</option>
														<option value="5">12:00pm to 3:00pm</option>
														<option value="6">3:00pm to 6:00pm</option>
														<option value="7">6:00pm to 9:00pm</option>
														<option value="8">9:00pm to 12:00am</option>
													</Field>
													<span>{props.circleTimeError}</span>
													{/*<input
																	type="number"
																	placeholder="Enter Amount Of Cycle*"
																	{...input}
																/> 
																 {meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)} 
															 </div>
														)} 
													 </Field> */}
												</div>
												<p className="doller-sign">$</p>
											</div>
											<Field name="circleName" component="input">
												{({ input }) => (
													<div>
														<label>Circle Name</label>
														<input
															type="text"
															placeholder="Enter Name Of Circle*"
															{...input}
														/>
														<span>{props.nameCircleError}</span>
													</div>
												)}
											</Field>

											<label>Upload Image</label>
											<input
												onChange={props.onFileUpload}
												type="file"
												accept="image/x-png,image/gif,image/jpeg"
												placeholder="Upload Image*"
											/>
											<span>{props.imgRequered}</span>
											<label>Circle Start Date</label>
											<DatePicker
												onChange={props.onDateChange}
												disabledDate={(d) => d.isBefore(new Date())}
											/>
											<span>{props.panRequered}</span>

											<label>Circle Type</label>
											<div className="checkbox-wrap">
												<Field name="packageType" type="radio" value="public">
													{({ input }) => {
														return (
															<>
																<input
																	name={input.name}
																	type="radio"
																	value="public"
																	checked={input.checked}
																	onChange={input.onChange}
																/>
																<label htmlFor="public">Public</label>
															</>
														);
													}}
												</Field>
												<Field name="packageType" type="radio" value="private">
													{({ input }) => {
														return (
															<>
																<input
																	name={input.name}
																	type="radio"
																	value="private"
																	checked={input.checked}
																	onChange={input.onChange}
																/>
																<label htmlFor="private">Private</label>
															</>
														);
													}}
												</Field>
											</div>
											<span>{props.errorMess}</span>
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
		</div>
	);
}

export default withTheme(TraditionalForm);

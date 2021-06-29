import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';
import {
	faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageUploader from 'react-images-upload';
import { Layout } from 'antd';
const { Content } = Layout;


const Register = (props) => {
	
	const [state, setState] = React.useState({ passVal: props.passwordShown, confirmPasswordShown : props.confirmPasswordShown});
	return (
		
			<Form
				onSubmit={props.onSubmit}
				validate={props.validate}
				render={({ handleSubmit }) => (
					<form className="registration-form" onSubmit={handleSubmit} id="register-form">
							<Container>
								<Row className="justify-content-center">
									<Col lg={6} className="registration-form-wrapper">
										<Row>
											<Col lg={6}>
												<Field
												name="firstName"
												component="input"
												placeholder="First Name *"
											>
												{({ input, meta }) => (
													<div>
														<input
															type="text"
															placeholder="Enter First Name*"
															{...input}
														/>
														{meta.touched && meta.error && (
															<span>{meta.error}</span>
														)}
													</div>
												)}
											</Field>
											</Col>
											
											<Col lg={6}>
												<Field
														name="fatherName"
														component="input"
														placeholder="Father Name *"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Enter Father Name*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<Field
														name="surName"
														component="input"
														placeholder="Sur Name *"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Enter Sur Name*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<Field
														name="nicNumber"
														component="input"
														placeholder="Nic Number *"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Enter Nic Number*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<Field
														name="dobLabel"
														component="input"
														placeholder="Date of Birth*"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Date of Birth*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<Field name="gender" component="select">
													<option disabled selected>Gender</option>
													<option value="male">Male</option>
													<option value="female">Female</option>
												</Field>
											</Col>
										
											<Col lg={6}>
												<Field
														name="shirtsize"
														component="input"
														placeholder="Shirt Size*"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Shirt Size*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>

											<Col lg={6}>
												<Field
														name="phoneNumber"
														component="input"
														placeholder="Enter Phone Number*"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type="text"
																	placeholder="Enter Phone Number*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<Field name="gender" component="select">
													<option disabled selected>Jamaat</option>
													<option value="Memon">Memon</option>
													<option value="Sindhi">Sindhi</option>
													<option value="Behari">Behari</option>
												</Field>
											</Col>
											
											<Col lg={6}>
												<Field name="team" component="select" value={props.value} onChange={props.handleChange}>
													<option disabled selected>Select Team</option>
													{
														props.games.map(gam=>{
															return(
																<option key={gam.id} value={gam.id}>{gam.type}</option>
															)
														})
													}
												</Field>
												{/* <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
													<option disabled>Select Team</option>
													{
														this.state.games.map(gam=>{
															return(
																<option key={gam.id} value={gam.id}>{gam.type}</option>
															)
														})
													}
												</Form.Control> */}
											</Col>
											
											<Col lg={6}>
												<div className="password-wrap">
														<Field
															name="password"
															component="input"
															placeholder="Password*"
														>
															{({ input, meta }) => (
																<div>
																	<input
																		type={state.passVal}
																		placeholder="Password*"
																		{...input}
																	/>
																	{meta.touched && meta.error && (
																		<span>{meta.error}</span>
																	)}
																</div>
															)}
														</Field>
													<span className="eyeIcon" onClick={() => this.setState({passVal: state.passVal === 'text' ? 'password' : 'text'}) }><FontAwesomeIcon icon={faEyeSlash} /></span>
												</div>
											</Col>

											<Col lg={6}>
												<div className="password-wrap">
													 <Field
														name="retype_password"
														component="input"
														placeholder="Confirm Password*"
													>
														{({ input, meta }) => (
															<div>
																<input
																	type={state.passwordShownVal}
																	placeholder="Confirm Password*"
																	{...input}
																/>
																{meta.touched && meta.error && (
																	<span>{meta.error}</span>
																)}
															</div>)}
														
													</Field>
													<span className="eyeIcon" onClick={() => this.setState({confirmPasswordShown: state.confirmPasswordShown === 'text' ? 'password' : 'text'}) }><FontAwesomeIcon icon={faEyeSlash} /></span>
												</div>
											</Col>
										
											<Col lg={6}>
												<ImageUploader
													withIcon={false}
													buttonText='Choose Profile Image'
													onChange={props.onDrop}
													imgExtension={['.jpg', '.gif', '.png', '.gif']}
													maxFileSize={5242880}
													singleImage={true}
												/>
											</Col>
										
											<Col lg={6}>
												<div className="mb-3">
													{/* <div style={{display: this.state.showSpeciality.length ? 'block' : 'none'}}>
														<h2>Speciality:</h2>  
														{
															this.state.showSpeciality.map((opt)=>{
																return(
																	<Form.Check key={opt.rule_option_id} inline label={opt.option_name} name="group1" 
																	value={opt.rule_option_id} type='radio' onChange={(e)=>{
																		console.log(e.target.value)
																		this.setState({
																			selectedSpeciality: e.target.value
																		});
																	}} />
																);
															})
														}  
														
													</div> */}
												</div>
											</Col>            
											
											<Col lg={12}>
												<button type="submit">Registration</button>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>    
					</form>
				)}
			/>
	);
};

export default withTheme(Register);

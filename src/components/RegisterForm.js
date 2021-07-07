import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import moment from 'moment'; 
import { Form, Field } from 'react-final-form';
import {
	faEyeSlash,
	faUser,
	faExclamationCircle,
	faTimesCircle,
	faEye
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageUploader from 'react-images-upload';
import { Layout, DatePicker, Popover, Select, Radio, Button } from 'antd';
const { Content } = Layout;
const { Option } = Select;




const Register = (props) => {
	 
	// console.log({props})
	return (
			<Form
				onSubmit={props.onSubmit}
				validate={props.validate}
				render={({ handleSubmit }) => (
					<form className="registration-form" onSubmit={handleSubmit} id="register-form">
							<div>
								<Row className="justify-content-center">
									<Col lg={12} className="registration-form-wrapper">
										<Row>
											<Col lg={12} className="m-b-15 text-center">
												
												<ImageUploader
													withIcon={false}
													buttonText={<div className="position-relative imageContainer">
														<div>
														{props.profilePic && <span className="position-absolute imageCross" onClick={(e)=>{
															e.stopPropagation();
															props.cancelImage();
														}}>
															<FontAwesomeIcon icon={faTimesCircle} />
														</span>}
														</div>
														{
															props.profilePic ? <div className="uploadedImage"><img src={props.profilePic} /></div> : <FontAwesomeIcon icon={faUser} />
														}
													</div>}
													onChange={props.onDrop}
													imgExtension={['.jpg', '.gif', '.png', '.gif']}
													maxFileSize={5242880}
													singleImage={true}
													label=""
												/>
												
												<h3 className="m-t-20">Upload Image</h3>
											</Col>

											<Col lg={4}>
												
												<Field
												name="name"
												component="input"
												placeholder="Name *"
											>
												{({ input, meta }) => (
													<div>
														<h5 className="m-t-20">Name * 
														{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}
														
														</h5>
														<input
															type="text"
															placeholder="Enter Name *"
															{...input}
															className={meta.touched && meta.error && 'hasError'}
														/>
														
													</div>
												)}
											</Field>
											</Col>
											
											<Col lg={4}>
												
												<Field
														name="fatherName"
														component="input"
														placeholder="Father Name *"
													>
														{({ input, meta }) => (
															<div>
															<h5 className="m-t-20">Father Name *
															{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}
														</h5>
																<input
																	type="text"
																	placeholder="Enter Father Name*"
																	{...input}
																	className={meta.touched && meta.error && 'hasError'}
																/>
															 
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={4}>
												<Field
														name="surName"
														component="input"
														placeholder="Sur Name *"
													>
														{({ input, meta }) => (
															<div>
																<h5 className="m-t-20">Sur Name *
																{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}
														</h5>
																<input
																	type="text"
																	placeholder="Enter Sur Name*"
																	{...input}
																	className={meta.touched && meta.error && 'hasError'}
																/>
																 
															</div>
														)}
													</Field>
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
																<h5 className="m-t-20">Password *
																		{meta.touched && meta.error && (
																	<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																		<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
																	</Popover>
																)}</h5>

																	<div className="position-relative">
																		<input
																			type={props.passVal}
																			placeholder="Password*"
																			{...input}
																			className={meta.touched && meta.error && 'hasError'}
																		/>
																		<span className="eyeIcon" onClick={props.eye}><FontAwesomeIcon icon={props.passVal=="text"?(faEyeSlash):(faEye)} /></span>
																	</div>
																	 
																</div>
															)}
														</Field>
													
												</div>
											</Col>
											
											<Col lg={6}>
												<Field
														name="regNumber"
														component="input"
														placeholder="Nic Number *"
													>
														{({ input, meta }) => (
															<div>
															<h5 className="m-t-20">Nic Number *
															{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
																<input
																	type="number"
																	placeholder="Enter Nic Number*"
																	{...input}
																	className={meta.touched && meta.error && 'hasError'}
																	
																/>
																 
															</div>
														)}
													</Field>
											</Col>

											<Col lg={6}>
												<Field
														name="phone"
														component="input"
														placeholder="+92335XXXXXXX"
													>
														{({ input, meta }) => (
															<div>
															<h5 className="m-t-20">Phone Number *
															{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
															
																<input
																	type="text"
																	placeholder="+92335XXXXXXX"
																	{...input}
																	className={meta.touched && meta.error && 'hasError'}
																/>
																
															</div>
														)}
													</Field>
											</Col>

											
											
											<Col lg={6} >
												
												<h5 className="m-t-20">Date Of Birth *
												{props.customError.dob.error && (
															<Popover placement="topRight" content={props.customError.dob.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
												<DatePicker format="DD/MM/YYYY" defaultPickerValue={moment('23/07/1994', 'DD/MM/YYYY')} name="dob" className="customDatePicker" onChange={(date, dateString)=>{
													props.selectObject(dateString,"dob");
												}} />
											</Col>

											<Col lg={12}>
												<Field
														name="email"
														component="input"
														placeholder="Enter Email Address *"
													>
														{({ input, meta }) => (
															<div>
															<h5 className="m-t-20">Email Address *
															{meta.touched && meta.error && (
															<Popover placement="topRight" content={meta.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
															
																<input
																	type="email"
																	placeholder="Enter Your Email Address *"
																	{...input}
																	className={meta.touched && meta.error && 'hasError'}
																/>
																
															</div>
														)}
													</Field>
											</Col>
											
											<Col lg={6}>
												<h5 className="m-t-20">Kit Size *
												{props.customError.kitSize.error && (
															<Popover placement="topRight" content={props.customError.kitSize.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
												<Select defaultValue="S" className="width customDropDown" onChange={(value)=>{
													props.selectObject(value, "kitSize");
												}}>
													{['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((kit,i)=>(
													<option key={i} value={kit}>{kit}</option>
											
												))}
												</Select>
											
											</Col>
										
											<Col lg={6}>
											<h5 className="m-t-20">Gender *
											{props.customError.gender.error && (
															<Popover placement="topRight" content={props.customError.gender.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
												<Select defaultValue="male" className="width customDropDown" onChange={(value)=>{
													props.selectObject(value, "gender");
												}}>
													<Option value="male">Male</Option>
													<Option value="female">Female</Option>
												</Select>
											</Col>

											
											
											<Col lg={6}>
												<h5 className="m-t-20">Jamaat Name *
												{props.customError.jamaatName.error && (
															<Popover placement="topRight" content={props.customError.jamaatName.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
												 
												<Select name='jamaatName' onChange={(value)=>{
													props.selectObject(value, "jamaatName");
												}} className="width customDropDown" >
													<option value="Amreli Memon Jamat.">Amreli Memon Jamat.</option><option value="Bantva Memon Jamat.">Bantva Memon Jamat.</option><option value="Bombay Halai Memon Jamat.">Bombay Halai Memon Jamat.</option><option value="Bhanvad Memon Jamat.">Bhanvad Memon Jamat.</option><option value="Cutchi Memon Markazi Jamat.">Cutchi Memon Markazi Jamat.</option><option value="Dhoraji Association.">Dhoraji Association.</option><option value="Gohilwad Halai Memon Jamat.">Gohilwad Halai Memon Jamat.</option><option value="Gondal Memon Association.">Gondal Memon Association.</option><option value="The Halari Memon General Jamat.">The Halari Memon General Jamat.</option><option value="Jamnagar Memon Jamat.">Jamnagar Memon Jamat.</option><option value="Jamnagar Wehvaria Memon Jamat.">Jamnagar Wehvaria Memon Jamat.</option><option value="Jetpur Memon Association.">Jetpur Memon Association.</option><option value="Junagadh (Dhorajiwala) Memon Association.">Junagadh (Dhorajiwala) Memon Association.</option><option value="Junagadh Memon Jamat.">Junagadh Memon Jamat.</option><option value="Pakistan Gujrati Memon Jamat.">Pakistan Gujrati Memon Jamat.</option><option value="Kathiyawar Nasarpur Memon Jamat.">Kathiyawar Nasarpur Memon Jamat.</option><option value="Kodinar Memon Jamat.">Kodinar Memon Jamat.</option><option value="Kutiyana Memon Association.">Kutiyana Memon Association.</option><option value="Manavadar Sardargadh Memon Jamat.">Manavadar Sardargadh Memon Jamat.</option><option value="Mangrol Memon Jamat.">Mangrol Memon Jamat.</option><option value="Morbi Tankara Memon Association.">Morbi Tankara Memon Association.</option><option value="The Okhai Memon Jamat.">The Okhai Memon Jamat.</option><option value="Pakistan Memon Jamat.">Pakistan Memon Jamat.</option><option value="Karachi Thradi Gujrati Memon Jamat.">Karachi Thradi Gujrati Memon Jamat.</option><option value="Porbandar Suriawad Memon Jamat.">Porbandar Suriawad Memon Jamat.</option><option value="Ranavav Memon Association.">Ranavav Memon Association.</option><option value="Rajkot Memon Association.">Rajkot Memon Association.</option><option value="Saurashtra Memon Jamat.">Saurashtra Memon Jamat.</option><option value="Tarsai Memon Jamat.">Tarsai Memon Jamat.</option><option value="Una Mahal Memon Jamat.">Una Mahal Memon Jamat.</option><option value="Upleta Memon Association.">Upleta Memon Association.</option><option value="Vadal Memon Anjuman.">Vadal Memon Anjuman.</option><option value="Vanthali Memon Association.">Vanthali Memon Association.</option><option value="Vasavad Memon Anjuman.">Vasavad Memon Anjuman.</option><option value="Veraval Patan Memon Anjuman.">Veraval Patan Memon Anjuman.</option>
												</Select>
													 
											</Col>
											
											<Col lg={6}>
												<h5 className="m-t-20">Select Game *
												{props.customError.game.error && (
															<Popover placement="topRight" content={props.customError.game.error} title="Error" trigger="hover">
																<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
															</Popover>
														)}</h5>
												
												<Select onChange={props.handleChange} loading={!props.games.length} className="width customDropDown" >
													{
															props.games.map(gam=>{
																return(
																	<option key={gam.id} value={gam.id}>{gam.type}</option>
																);
															})
														}
												</Select>
													
											</Col>
 											<Col lg={12}>
												<div className="mb-3">
													<div style={{display: props.customError.game.value && props.customError.game.value.options && props.customError.game.value.options.length ? 'block' : 'none'}}>
														<h5 className="m-t-20">Choose Speciality *</h5>

														<Radio.Group onChange={props.selectedSpeciality}>
															{props.customError.game.value && props.customError.game.value.options && props.customError.game.value.options.map((opt)=>{
																return(
																	<Radio key={opt.rule_option_id} value={opt.rule_option_id} >{opt.option_name}</Radio>
																);
															})}
														</Radio.Group>
														
													</div>
												</div>
											</Col>   

										 
										
											
											

										
											
										
											         
											
											<Col lg={12} className="m-t-20">
												<Button htmlType="submit" className="register" loading={props.btnLoading}>Registration</Button>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>    
					</form>
				)}
			/>
	);
};

export default (Register);

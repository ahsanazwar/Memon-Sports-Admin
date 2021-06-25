import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
const { Content } = Layout;
function NonTraditionalForm() {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="contact-form">
					<div className="site-container">
						<Row justify="center">
							<Col md={12}>
								<h2>Non Traditional Susu</h2>
								<form action="" id="register-form">
									<label>panel Name</label>
									<input
										type="text"
										name="password"
										placeholder="Panel Name*"
									/>
									<label>Select Package</label>
									<br />
									<div className="checkbox-wrap">
										<input
											type="radio"
											id="bronze"
											name="package"
											value="bronze"
										/>
										<label htmlFor="bronze">Bronze Plan</label>
										<input
											type="radio"
											id="silver"
											name="package"
											value="silver"
										/>
										<label htmlFor="silver">Silver Plan</label>
										<input type="radio" id="gold" name="package" value="gold" />
										<label htmlFor="gold">Gold Plan</label>
										<br />
									</div>
									<label>Public/Private</label>
									<div className="checkbox-wrap">
										<input
											type="radio"
											id="public"
											name="account-type"
											value="public"
										/>
										<label htmlFor="public">Public Plan</label>
										<input
											type="radio"
											id="private"
											name="account-type"
											value="private"
										/>
										<label htmlFor="private">Private Plan</label>
										<br />
									</div>
									{/* <label>Selection</label>
									<select>
										<option>6</option>
										<option>12</option>
									</select> */}
									<button className="thm-btn bg-cl-1" type="submit">
										Update
									</button>
								</form>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
}

export default withTheme(NonTraditionalForm);

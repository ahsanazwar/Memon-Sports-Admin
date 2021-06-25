import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
const { Content } = Layout;
function ChangeNumberForm() {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="contact-form">
					<div className="site-container">
						<Row justify="center">
							<Col md={12}>
								<h2>Change Phone Number</h2>
								<form action="" id="register-form">
									<label>Old Phone Number</label>
									<input
										type="text"
										name="old-phone-number"
										placeholder="Old Phone Number*"
										disabled
										value="090078601"
									/>
									<label>Phone Number</label>
									<input
										type="text"
										name="phone-number"
										placeholder="Phone Number*"
									/>
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

export default withTheme(ChangeNumberForm);

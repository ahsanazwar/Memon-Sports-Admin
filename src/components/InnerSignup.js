import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const { Content } = Layout;
function InnerSignup() {
	return (
		<Content>
			<div className="text-section-section">
				<div className="site-container">
					<Row>
						<Col span={24}>
							<div className="sec-title">
								<h2>
									Sign Up <span>Today</span>
								</h2>
							</div>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<p>
								Rotating savings and credit associations help hard-working
								people make <br />
								ends meet from Latin America to Africa to Asia. If you're
								looking to <br />
								build your savings and improve your credit score, then your next
								step is clear. <br />
								Find a friend and sign up to join SoPublic today.
							</p>
							<Link to="/register">Sign up</Link>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(InnerSignup);

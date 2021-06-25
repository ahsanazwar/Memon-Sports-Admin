import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function HomeWelcomeSection() {
	return (
		<Content>
			<div className="welcome-area">
				<div className="site-container">
					<Row>
						<Col xs={24} md={12}>
							<div className="sec-title">
								<h2>
									Find Easy Credit and a Helpful{' '}
									<span>Community with SoPublic</span>
								</h2>
								<span className="decor" />
							</div>
							<div className="text-holder">
								<p>
									Rotating savings and credit associations are a popular way for
									communities to support each other. SoPublic makes this model
									accessible to lenders and loan-seekers around the world.{' '}
								</p>
								<p>
									Have you ever needed fast, easy access to credit? Going to a
									bank isn't always an option, particularly when you're
									struggling with debt or a bad credit score. If you explore
									cultures around the world, you'll find that many communities
									have developed the perfect solution. They lend and borrow
									communally from the same pool, allowing each member to meet
									their needs as they go. When you use SoPublic, you gain access
									to this time-tested financial model.{' '}
								</p>

								<div className="bottom">
									<Link className="thm-btn bg-cl-1" to="/about">
										More About Us
									</Link>
									<div className="title">
										<h3>
											Request Quote: <span>Support@SoPublic.com</span>
										</h3>
									</div>
								</div>
							</div>
						</Col>
						<Col xs={24} md={12}>
							<div className="welcome-img">
								<img
									src={'../../public/images/Layer2.png'}
									alt="Awesome Logo"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(HomeWelcomeSection);

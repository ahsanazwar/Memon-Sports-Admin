import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
// get our fontawesome imports
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Footer } = Layout;
function FooterSection() {
	return (
		<Footer className="">
			<div className="footer-section">
				<div className="site-container">
					<Row gutter={30}>
						<Col className="gutter-row" md={8}>
							<div className="single-footer-widget pd-bottom">
								<div className="footer-logo">
									<Link to="/">
										<img
											src={'../../public/images/main-logo-white.png'}
											alt="Awesome Footer Logo"
										/>
									</Link>
								</div>
								<div className="Master HN-info">
									<p />
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-footer-widget pd-bottom">
								<div className="title">
									<h3>Newsletter</h3>
								</div>
								<div className="subscribe-form">
									<p>Subscribe to our newsletter!</p>
									<form action="#">
										<input
											type="text"
											name="email"
											placeholder="Enter Your Email..."
										/>
										<button type="submit">
											<FontAwesomeIcon icon={faPaperPlane} />
										</button>
									</form>
									<h4>
										We dont’t do mail to spam and your mail id is very
										confidential ever.
									</h4>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-footer-widget pd-bottom">
								<div className="title">
									<h3>Address</h3>
									<ul className="footer-contact-info">
										<li>
											<div className="icon-holder">
												<span className="flaticon-building" />
											</div>
											<div className="text-holder">
												<p>Los Angeles, CA</p>
											</div>
										</li>
										<li>
											<div className="icon-holder">
												<span className="flaticon-technology" />
											</div>
											<div className="text-holder">
												<p>
													<a href="tel:+7474440067">(747) 444-0067</a>
												</p>
											</div>
										</li>
										<li>
											<div className="icon-holder">
												<span className="flaticon-e-mail-envelope" />
											</div>
											<div className="text-holder">
												<p>
													<a href="mailto:info@masterhn.com">
														Support@SoPublic.com
													</a>
												</p>
											</div>
										</li>
										<li>
											<div className="icon-holder time">
												<span className="flaticon-clock" />
											</div>
											<div className="text-holder">
												<p>
													Monday - Sat Day: 09.00 to 18.00
													<br />
													Sunday Closed
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Footer>
	);
}

export default withTheme(FooterSection);

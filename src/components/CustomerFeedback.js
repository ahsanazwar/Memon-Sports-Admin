import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function CustomerFeedback() {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<Content>
			<div className="customer-feedback-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>
									Customers <span>Feedback</span>
								</h2>
								<span className="border" />
							</div>
							<p className="sub-title">Turn Your Life Around:</p>
							<p className="sub-text">
								Be part of our SUSUs and see for yourself how it changes your
								life around.
							</p>
						</Col>
					</Row>
					<Slider {...settings}>
						<div>
							<Row>
								<Col md={10}>
									<img src={'../../public/images/h-img1.png'} alt="" />
								</Col>
								<Col md={14}>
									<div className="text-box">
										<div className="text">
											<p>
												“I have been using Traditional SUSU to save my money for
												years. It has been my partner in paying off my debt and
												buying my own property.”
											</p>
											<h3>Chris, 30</h3>
										</div>
									</div>
								</Col>
							</Row>
						</div>
						<div>
							<Row>
								<Col md={10}>
									<img src={'../../public/images/h-img1.png'} alt="" />
								</Col>
								<Col md={14}>
									<div className="text-box">
										<div className="text">
											<p>
												“Being a part of a Non-Traditional SUSU and giving to
												the community while receiving benefits is one of the
												things that I like the most about this. It helped me get
												through my college”
											</p>
											<h3>Veronica, 26</h3>
										</div>
									</div>
								</Col>
							</Row>
						</div>
						<div>
							<Row>
								<Col md={10}>
									<img src={'../../public/images/h-img1.png'} alt="" />
								</Col>
								<Col md={14}>
									<div className="text-box">
										<div className="text">
											<p>
												“I have never been part of a better program. It helps
												you build your life and decrease worry about your
												finances to a whole new level.”
											</p>
											<h3>Sam, 40</h3>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Slider>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(CustomerFeedback);

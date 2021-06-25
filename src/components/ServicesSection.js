import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function ServicesSection() {
	return (
		<Content>
			<div className="services-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>Services We do</h2>
								<span className="decor" />
							</div>
						</Col>
					</Row>
					<Row gutter={15}>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="single-service-item">
								<div className="img-holder">
									<img src={'../../public/images/2.jpg'} alt="Awesome Logo" />
								</div>
								<div className="text-holder">
									<Link to="/">
										<h3>
											Residential <span>Design</span>
										</h3>
									</Link>
									<p>We design Wardrobes, Kitchen Cabinets based...</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(ServicesSection);

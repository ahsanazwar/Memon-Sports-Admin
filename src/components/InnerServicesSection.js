import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function InnerServicesSection() {
	return (
		<Content>
			<div className="services-section main-services">
				<div className="site-container">
					<Row>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
						<Col md={8}>
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
									<Link to="/" className="read-more-btn">
										Read More
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(InnerServicesSection);

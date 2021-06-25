import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function LatestProducts() {
	return (
		<Content>
			<div className="latest-products-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>
									Latest <span>Products</span>
								</h2>
								<span className="decor" />
							</div>
						</Col>
					</Row>
				</div>
				<div className="full-container">
					<Row gutter={30}>
						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>

						<Col className="gutter-row" md={6}>
							<div className="single-project-item">
								<div className="img-holder">
									<a href="#" className="image-hover-effect">
										<img
											src={'../../public/images/img3.jpg'}
											alt="Awesome Image"
										/>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(LatestProducts);

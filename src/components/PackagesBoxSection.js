import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function TraditionalSection() {
	return (
		<Content>
			<div className="tradition-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>Traditional</h2>
							</div>
						</Col>
					</Row>
					<Row gutter={15} justify="center">
						<Col className="gutter-row" md={8} xs={24}>
							<div className="tradition-item">
								<h3>6-Person Plan</h3>
								<p>
									gift as much as you like, receive 6 times the gifting amount
								</p>
								<Link to="/garden">DISCOVER</Link>
							</div>
						</Col>
						<Col className="gutter-row" md={8} xs={24}>
							<div className="tradition-item">
								<h3>12-Person Plan</h3>
								<p>
									gift as much as you like, receive 12 times the gifting amount
								</p>
								<Link to="/garden">DISCOVER</Link>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className="tradition-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>Non-Traditional</h2>
							</div>
						</Col>
					</Row>
					<Row gutter={15}>
						<Col className="gutter-row" md={8} xs={24}>
							<div className="tradition-item">
								<h3>Bronze Plan</h3>
								<p className="price-text">gift $100, receive $800</p>
								<Link to="/garden">DISCOVER</Link>
							</div>
						</Col>
						<Col className="gutter-row" md={8} xs={24}>
							<div className="tradition-item">
								<h3>Silver Plan</h3>
								<p className="price-text">gift $250, receive $2,000</p>
								<Link to="/garden">DISCOVER</Link>
							</div>
						</Col>
						<Col className="gutter-row" md={8} xs={24}>
							<div className="tradition-item">
								<h3>Gold Plan</h3>
								<p className="price-text">gift $500, receive $4,000</p>
								<Link to="/garden">DISCOVER</Link>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(TraditionalSection);

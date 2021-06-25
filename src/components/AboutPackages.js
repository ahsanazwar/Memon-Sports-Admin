import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function AboutPackages() {
	return (
		<Content>
			<div className="tradition-section single-section">
				<div className="site-container">
					<Row gutter={15}>
						<Col className="gutter-row" md={8}>
							<div className="tradition-item">
								<h3>Bronze Plan</h3>
								<p className="price-text">gift $100, receive $800$</p>
								<Link>DISCOVER</Link>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="tradition-item">
								<h3>Silver Plan</h3>
								<p className="price-text">gift $250, receive $2,000</p>
								<Link>DISCOVER</Link>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="tradition-item">
								<h3>Gold Plan</h3>
								<p className="price-text">gift $500, receive $4,000</p>
								<Link>DISCOVER</Link>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(AboutPackages);

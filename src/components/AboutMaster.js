import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function AboutMaster() {
	return (
		<Content>
			<div className="about-master-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>
									About <span>SO Public</span>
								</h2>
								<span className="decor" />
							</div>
						</Col>
					</Row>
					<Row gutter={30}>
						<Col className="gutter-row" md={24}>
							<div className="text-holder">
								<p>
									{' '}
									Our take on the ROSCA (Rotating Savings and Credit Association
									(ROSCA)) provides consistent, reliable payments with a 700%
									ROI. You'll gift for several weeks depending on your role,
									then receive your harvest at the end of the cycle. Payments
									revolve around a system of seeds, buds, waters, and pistils.
									The pistil receives a payment before reverting to sending
									gifts, and the other members grow into a pistil at which point
									the rotation repeats. This effectively gives you an impressive
									advance on future savings that you can put away or invest as
									needed. Depending on whether you choose our Bronze, Silver, or
									Gold plans, you can send and receive proportionately larger
									gifts.{' '}
								</p>
							</div>
						</Col>
						{/* <Col className="gutter-row" md={8}>
							<img src={'../../public/images/img989.jpeg'} alt="Awesome Logo" />
						</Col>
						<Col className="gutter-row" md={8}>
							<img src={'../../public/images/how-bg.jpeg'} alt="Awesome Logo" />
						</Col> */}
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(AboutMaster);

import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function TextSection() {
	return (
		<Content>
			<div className="text-section-section">
				<div className="site-container">
					<Row>
						<Col span={24}>
							<div className="sec-title">
								<h2>
									SoPublic P2P Saving <span>and Lending Services</span>
								</h2>
							</div>
							<p>
								If you're struggling to save and build credit, then SoPublic is
								the risk-free solution you're looking for.{' '}
							</p>
							<p>
								At SoPublic, our mission is to make savings and credit
								accessible to hard-working people around the world. You can sign
								up to take part in supportive, communal saving and lending with
								friends, family, or new people. No matter what your credit
								history looks like, you can take a bold step forward to
								financial health with us.
							</p>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(TextSection);

import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function HowItWork() {
	return (
		<Content>
			<div className="about-master-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>
									How Does <span>SoPublic Work?</span>
								</h2>
								<span className="decor" />
							</div>
						</Col>
					</Row>
					<Row gutter={30}>
						<Col className="gutter-row" md={8}>
							<div className="text-holder">
								<p>
									SoPublic works on a gift and harvest cycle where everyone
									contributes to a common fund and people collect on a rotating
									basis. We use a panel-inspired graph to depict the process,
									which includes a central pistil and surrounding petals. Each
									of the petals periodically contributes a gift, while the
									pistil receives their harvest.
								</p>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="text-holder">
								<p>
									After a pistil receives their harvest, they become a
									contributor once again. Conversely, the petals will collect
									their own harvest after branching off to become the pistil of
									a new circle. We don't require credit checks, but we guarantee
									reliability through our own reputation system. When a user and
									the members of a money circle contribute as
								</p>
							</div>
						</Col>
						<Col className="gutter-row" md={8}>
							<div className="text-holder">
								<p>
									they should, each has their reputation score improve. This
									way, you can check the reputation of a user and a circle prior
									to joining their circle. However, you're not on your own: we
									protect you from bad-faith users by automating gifts that a
									user has agreed to contribute.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(HowItWork);

import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import TrationalForm from './TrationalForm';

const { Content } = Layout;
function TraditionalSection(props) {
	return (
		<Content>
			<div className="my-profile-section">
				<Row>
					<Col span={24}>
						<div className="profile-right-section">
							<div className="profile-right-wrapper">
								<TrationalForm {...props} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default withTheme(TraditionalSection);

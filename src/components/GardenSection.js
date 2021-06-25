import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
// import GardenInner from './GardenInner';
import TraditionalCycleForm from './TraditionalCycleForm2';
const { Content } = Layout;
const GardenSection = (props) => {
	return (
		<Content>
			<div className="my-profile-section">
				<Row>
					<Col md={24} xs={24}>
						<div className="profile-right-section">
							<div className="profile-right-wrapper">
								{/* <GardenInner {...props} /> */}
								<TraditionalCycleForm {...props} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
};

export default withTheme(GardenSection);

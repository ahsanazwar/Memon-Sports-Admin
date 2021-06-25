import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import SideBar from './MyProfileSideBar';
import NonTraditionalForm from './NonTraditionalForm';

const { Content } = Layout;
function NonTraditionalSection() {
	return (
		<Content>
			<div className="my-profile-section">
				<Row>
					<Col span={4}>
						<SideBar />
					</Col>
					<Col span={20}>
						<div className="profile-right-section">
							<div className="profile-right-wrapper">
								<NonTraditionalForm />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default withTheme(NonTraditionalSection);

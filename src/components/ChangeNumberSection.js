import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import SideBar from './MyProfileSideBar';
import ChangeNumberForm from './ChangeNumberForm';

const { Content } = Layout;
function ChangeNumberSection() {
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
								<ChangeNumberForm />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default withTheme(ChangeNumberSection);

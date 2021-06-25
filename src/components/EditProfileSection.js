import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import SideBar from './MyProfileSideBar';
import EditProfileForm from './EditProfileForm';

const { Content } = Layout;
function EditProfileSection(props) {
	return (
		<Content>
			<div className="my-profile-section">
				<Row>
					<Col md={4} xs={24}>
						<SideBar {...props} />
					</Col>
					<Col md={20} xs={24}>
						<div className="profile-right-section">
							<div className="profile-right-wrapper">
								<EditProfileForm {...props} />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default withTheme(EditProfileSection);

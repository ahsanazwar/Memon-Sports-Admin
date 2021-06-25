import React from 'react';
import { Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function MyProfileBanner() {
	return (
		<Content>
			<div className="profile-banner-section">
				<div className="bottom-line" />
			</div>
		</Content>
	);
}

export default withTheme(MyProfileBanner);

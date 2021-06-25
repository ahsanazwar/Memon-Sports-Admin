import React from 'react';
import { Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const { Content } = Layout;
function InnerBanner(props) {
	return (
		<Content>
			<div
				className="inner-banner-section"
				style={{
					backgroundImage: props.src
						? `url(../../public/images/${props.src})`
						: 'url(../../public/images/home-img1.png',
				}}
			>
				<div className="inner-banner-wrapper">
					<h1>{props.viewname}</h1>
				</div>
				<div className="banner-breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to={props.viewname}>{props.viewname}</Link>
						</li>
					</ul>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(InnerBanner);

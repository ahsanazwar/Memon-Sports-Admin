import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function ContentSection(props) {
	return (
		<Content>
			<div className="content-section">
				<div className="site-container">
					<Row>
						<Col span={24}>
							<div
								className="sec-title"
								style={{ display: props.secheading1 ? 'block' : 'none' }}
							>
								<h2>
									{props.secheading1} <span>{props.secheading2}</span>
								</h2>
								<span className="decor" />
							</div>
							<p>{props.para1}</p>
							<p>{props.para2}</p>
						</Col>
					</Row>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(ContentSection);

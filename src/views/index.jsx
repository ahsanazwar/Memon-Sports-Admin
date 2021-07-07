import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ConfigProvider, Menu } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
// import esES from 'antd/lib/locale-provider/es_ES';

// const localeJsonData = require('../../public/locales/data.json');

const CONSTANT_LANGUAGES = [
	
];

class BaseView extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
	}

 

	render() {
		return (
			<IntlProvider
				locale="en"
			>
				<ConfigProvider locale="en">
					<div className="width height wrapper relative"> 
							{this.props.children}
					</div>
					<footer className="main-footer">
						footer
						{/* <Container>
							<Row>
								<Col lg={12}>
									<div className="main-footer-wrap">
										<div className="footer-logo"><Link to="/"><img src={"/assets/images/site-logo.png"} /></Link></div>
										<div><p className="copy-text">Copy Rights © Memon Sports</p></div>
									</div>
								</Col>
							</Row>
						</Container>   */}
					</footer>
				</ConfigProvider>
			</IntlProvider>
		);
	}
}

BaseView.propTypes = {
	children: propTypes.array,
};

export default BaseView;
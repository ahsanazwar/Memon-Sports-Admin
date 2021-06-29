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
							{/*<div className="absolute top-10 right-15 z-index-1">
								<Dropdown.Button
									icon={<GlobalOutlined />}
									onClick={this.handleButtonClick}
									overlay={this.menu}
								>
									{this.state.selectedLanguage.title}
								</Dropdown.Button>
							</div>*/}
							{this.props.children}
					</div>
				</ConfigProvider>
			</IntlProvider>
		);
	}
}

BaseView.propTypes = {
	children: propTypes.array,
};

export default BaseView;
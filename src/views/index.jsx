import React, { PureComponent } from 'react';
import Scroller from 'react-custom-scrollbars';
import propTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ConfigProvider, Menu } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
// import esES from 'antd/lib/locale-provider/es_ES';

const localeJsonData = require('../../public/locales/data.json');

const CONSTANT_LANGUAGES = [
	{
		designLanguage: enUS,
		data: localeJsonData.en,
		language: 'en',
		title: 'English',
		slected: true,
	},
];

class BaseView extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.state = {
			selectedLanguage:
				JSON.parse(localStorage.getItem('lang')) ||
				CONSTANT_LANGUAGES.find((val) => val.slected),
		};
	}

	handleButtonClick = () => {
		return false;
	};

	handleMenuClick = ({ key }) => {
		CONSTANT_LANGUAGES.map((vals) => {
			vals.slected = false;
			return vals;
		});

		CONSTANT_LANGUAGES[key].slected = true;
		this.setState({
			selectedLanguage: CONSTANT_LANGUAGES.find((val) => val.slected),
		});

		localStorage.setItem(
			'lang',
			JSON.stringify(CONSTANT_LANGUAGES.find((val) => val.slected))
		);
	};

	menu = (
		<Menu onClick={this.handleMenuClick}>
			{CONSTANT_LANGUAGES.map((vals, i) => (
				<Menu.Item key={i}>{vals.title}</Menu.Item>
			))}
		</Menu>
	);

	render() {
		return (
			<IntlProvider
				locale={this.state.selectedLanguage.language}
				messages={this.state.selectedLanguage.data}
			>
				<ConfigProvider locale={this.state.selectedLanguage.designLanguage}>
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
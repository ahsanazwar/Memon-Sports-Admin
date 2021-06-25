import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './routes';

class App extends React.Component {
	render() {
		return <Routes />;
	}
}

App.propTypes = {
	children: PropTypes.element,
};

export default hot(module)(App);

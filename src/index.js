import './styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './appRoot';
export const store = configureStore();

if (!Intl.RelativeTimeFormat) {
	require('@formatjs/intl-relativetimeformat/polyfill');
	require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
	require('@formatjs/intl-relativetimeformat/dist/locale-data/es');
	require('@formatjs/intl-relativetimeformat/dist/locale-data/eu');
	require('@formatjs/intl-relativetimeformat/dist/locale-data/fr');
}

render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./appRoot', () => {
		render(
			<AppContainer>
				<Root store={store} history={history} />
			</AppContainer>,
			document.getElementById('app')
		);
	});
}

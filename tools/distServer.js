// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import { chalkProcessing } from './chalkConfig';
import compression from 'compression';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
	port: process.env.PORT || 4000,
	host: 'sopublic.osc-fr1.scalingo.io/',
	open: false,
	notify: false,
	ghost: false,
	server: {
		baseDir: 'dist',
	},

	ui: false,
	files: ['src/*.html'],

	middleware: [compression(), historyApiFallback()],
});

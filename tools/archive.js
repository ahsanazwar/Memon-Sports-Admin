/* eslint-disable no-console */
const fs = require('fs');
const archiver = require('archiver');
const moment = require('moment');
const chalk = require('chalk');
const childProcess = require('child_process');

let branchName = '';
childProcess.exec('git symbolic-ref --short HEAD', {}, (err, stdout) => {
	if (err) {
		return '';
	}
	branchName = stdout.trimRight();

	Build(branchName);
});

const Build = branch_name => {
	const zipFilename = `fanxp2-dist-${branch_name}-${moment().format(
		'YYYY-MM-DD-hhmma'
	)}.zip`;

	const output = fs.createWriteStream(`${zipFilename}`);
	const archive = archiver('zip');
	output.on('end', () => {});

	archive.on('warning', function(err) {
		if (err.code === 'ENOENT') {
			// err;
		} else {
			throw err;
		}
	});

	archive.on('finish', () => {
		console.log('\n\r');
		console.log(
			chalk.white.underline.bold(`RUN: rm -rf dist && unzip ${zipFilename}`)
		);
		console.log('\n\r');
	});

	archive.pipe(output);

	archive.directory('.ebextensions/', '.ebextensions');
	archive.file('server.tixsee.js', { name: 'server.tixsee.js' });
	archive.file('package.json', { name: 'package.json' });
	archive.file('.npmrc', { name: '.npmrc' });
	archive.directory('dist/', 'dist');

	archive.finalize();
};

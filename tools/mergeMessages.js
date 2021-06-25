import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';
import last from 'lodash/last';

import { LanguageText } from '../src/locale/centeralizedFilesLocalization';

const createJsons = () => {
	const langs = {};
	const LANG_DIR = './public/locales/';

	Object.keys(LanguageText).map(ids => {
		const langObj = LanguageText[ids];
		const filteredArr = Object.keys(langObj).filter(
			langKey => langKey !== 'message'
		);

		filteredArr.map(langKey => {
			langs[langKey] = langs[langKey] || {};
			const temp = {};
			temp[ids] = LanguageText[ids][langKey];
			langs[langKey] = { ...langs[langKey], ...temp };
		});
	});

	const fileNames = Object.keys(langs).map(keys => keys);

	fileNames.map(name => {
		try {
			fs.unlinkSync(`./public/locales/${name}.json`);
		} catch (error) {
			//console.log((error);
		}

		if (name == 'en') {
			try {
				fs.unlinkSync(
					`./public/locales/messages/centeralizedFilesLocalization.json`
				);
			} catch (error) {
				//console.log((error);
			}
			const mergeMessages = Object.keys(langs[name]).map(id => {
				return {
					id: id,
					defaultMessage: langs[name][id]
				};
			});

			fs.writeFileSync(
				`${LANG_DIR}/messages/centeralizedFilesLocalization.json`,
				JSON.stringify(mergeMessages, null, 2)
			);
		}

		fs.writeFileSync(
			`${LANG_DIR}${name}.json`,
			JSON.stringify(langs[name], null, 2)
		);
	});
	return;
};

Promise.resolve(createJsons()).then(() => {
	console.log('files are created');

	const MESSAGES_PATTERN = './public/locales/messages/*.json';
	const LANG_DIR = './public/locales/';
	const LANG_PATTERN = './public/locales/*.json';

	// Try to delete current json files from public/locales
	try {
		fs.unlinkSync('./public/locales/data.json');
	} catch (error) {
		//console.log((error);
	}

	// Merge translated json files (es.json, fr.json, etc) into one object
	// so that they can be merged with the eggregated "en" object below

	const mergedTranslations = globSync(LANG_PATTERN)
		.map(filename => {
			const locale = last(filename.split('/')).split('.json')[0];
			return { [locale]: JSON.parse(fs.readFileSync(filename, 'utf8')) };
		})
		.reduce((acc, localeObj) => {
			return { ...acc, ...localeObj };
		}, {});

	// Aggregates the default messages that were extracted from the example app's
	// React components via the React Intl Babel plugin. An error will be thrown if
	// there are messages in different components that use the same `id`. The result
	// is a flat collection of `id: message` pairs for the app's default locale.

	const defaultMessages = globSync(MESSAGES_PATTERN)
		.map(filename => fs.readFileSync(filename, 'utf8'))
		.map(file => JSON.parse(file))
		.reduce((collection, descriptors) => {
			descriptors.forEach(({ id, defaultMessage }) => {
				if (collection?.id) {
					throw new Error(`Duplicate message id: ${id}`);
				}
				collection[id] = defaultMessage;
			});

			return collection;
		}, {});

	// Create a new directory that we want to write the aggregate messages to
	mkdirpSync(LANG_DIR);

	// Merge aggregated default messages with the translated json files and
	// write the messages to this directory

	fs.writeFileSync(
		`${LANG_DIR}data.json`,
		JSON.stringify({ en: defaultMessages, ...mergedTranslations }, null, 2)
	);
});

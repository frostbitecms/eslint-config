const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	env: {
		browser: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	extends: [
		..._extends,
		'plugin:security/recommended',
		'plugin:no-unsanitized/DOM',
	],
	plugins,
	ignorePatterns,
	settings,
	rules,
};
const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	extends: _extends,
	plugins,
	ignorePatterns,
	settings,
	rules,
};

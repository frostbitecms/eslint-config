const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	env: {
		commonjs: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest'
	},
	extends: _extends,
	plugins,
	ignorePatterns,
	settings,
	rules,
};

const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	env: {
		commonjs: true,
		node: true,
		jasmine: true,
	},
	parserOptions: {
		ecmaVersion: 'latest'
	},
	overrides: [
		{
			files: ['**/*.spec.js', 'spec/**/*', 'test/**/*']
		}
	],
	extends: _extends,
	plugins: [...plugins, 'jasmine'],
	ignorePatterns,
	settings,
	rules,
};

const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	env: {
		node: true,
		commonjs: true,
		es6: true,
		mocha: true
	},
	extends: _extends,
	plugins: [...plugins, 'mocha'],
	ignorePatterns,
	settings,
	rules,
};

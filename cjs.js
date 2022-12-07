const rules = require('./rules/common');
const { settings, _extends, plugins, ignorePatterns } = require('./settings/common');

module.exports = {
	root: true,
	env: {
		node: true,
		commonjs: true
	},
	extends: _extends,
	plugins,
	ignorePatterns,
	settings,
	rules,
};

const jsonSortSettings = require('./json');

module.exports = {
	ignorePatterns: [
		'dist/**/*',
		'build/**/*',
		'lib/**/*',
		'static/**/*'
	],
	plugins: ['editorconfig', 'prettier', 'json-format'],
	_extends: [
		'eslint:recommended',
		'prettier',
		'plugin:editorconfig/all',
		'plugin:jsonc/recommended-with-jsonc'
	],
	settings: {
		...jsonSortSettings
	}
}
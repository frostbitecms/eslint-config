module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
	rules: {
		'@typescript-eslint/ban-ts-comment': 0,
		'tsdoc/syntax': 'warn'
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.mts', '**/*.tsx']
		}
	],
};

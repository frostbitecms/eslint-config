module.exports = {
	parserOptions: {
		ecmaFeatures: {
			browser: true,
			es6: true,
			jsx: true,
		},
	},
	extends: [
		'plugin:styled-components-a11y/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
	],
	plugins: [
		'@emotion/eslint-plugin',
		'ie11',
		'styled-components-a11y',
		'react',
	],
	rules: {
		'ie11/no-collection-args': ['error'],
		'ie11/no-for-in-const': ['error'],
		'ie11/no-loop-func': ['warn'],
		'ie11/no-weak-collections': ['error'],
	},
	globals: {
		JSX: true
	},
	settings: {
		react: {
			'version': 'detect'
		}
	}
};
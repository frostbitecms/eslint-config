module.exports = {
	plugins: [
		'lit',
		'lit-a11y'
	],
	extends: [
		'plugin:wc/recommended',
		'plugin:lit/recommended',
		'plugin:lit-a11y/recommended'
	],
	rules: {
		'class-methods-use-this': 'off',
		'lit/no-template-arrow': 'warn'
	}
}
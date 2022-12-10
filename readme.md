# Frostbite eslint rules <img src="https://avatars.githubusercontent.com/u/120051982?s=200&v=4" align="right" width="128" height="128">


## Install with npm

```
npm i -D @frostbitecms/eslint-config
```
### with yarn

```
yarn add -D @frostbitecms/eslint-config
```


### use in eslint config

```json
{
  "extends": [
    "@frostbitecms/eslint-config"
  ]
}
```


## Core Modules

name | description | stable version 
--|--|--
`@frostbitecms/eslint-config` | common rules shared between node/browser |  ✅
`@frostbitecms/eslint-config/cjs` | commonjs-specific rules | ✅
`@frostbitecms/eslint-config/module` | module-specific rules | ✅
`@frostbitecms/eslint-config/typescript` | typescript plugins / parser / rules | ✅
`@frostbitecms/eslint-config/react` | jsx / emotion style settings+rules | ✅
`@frostbitecms/eslint-config/lit` | lit html lint rules for web components | ✅
`@frostbitecms/eslint-config/jasmine` | jasmine test rules | ✅
`@frostbitecms/eslint-config/mocha` | mocha test rules | ✅

# eslint-config-blend


This package provides Blend Marketing's .eslintrc as an extensible shared config.
Copies a lot of functionality from [airbnb's wonderful configuration][0]

## Usage

We export our standard ESLint configurations for usage.

### eslint-config-blend

Our default export contains all of our ESLint rules, including ECMAScript 6+
and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`,
and `eslint-plugin-jsx-a11y`.

```
yarn add --dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-blend
```

2. Add `"extends": "blend"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

You can make sure this module lints with itself using `yarn lint`.

[0]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

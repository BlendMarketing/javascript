module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
  },
  rules: {
    // Sometimes using require makes sense.
    'global-require': 0,

    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.spec.js*'] },
    ],
    'no-confusing-arrow': 0,
  },
};

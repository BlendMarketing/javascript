module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
  },
  rules: {
    'global-require': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'no-confusing-arrow': 0,
  },
};

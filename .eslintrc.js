'use strict';

const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react',
    'babel'
  ],
  rules: {
    'curly': [2, 'all'],
    'func-names': 0,
    'prefer-const': 0,
    'arrow-body-style': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ["error", {
        "devDependencies": ['*.test.js', '*.spec.js']
      }
    ],
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': [2, {
      'code': 120
    }],
    'consistent-return': 0,
    'comma-dangle': 0
  }
};

module.exports = eslintrc;

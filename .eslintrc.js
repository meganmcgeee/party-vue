module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'html',
    'lodash-fp',
    'better',
    'fp',
  ],
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'better/no-deletes': 2,
    'better/no-fors': 2,
    'better/no-instanceofs': 2,
    'better/no-switches': 2,
    'better/no-whiles': 2,
    'fp/no-arguments': 2,
    'fp/no-mutating-assign': 2,
    // 'fp/no-mutation': [2, {
    //   exceptions: [
    //     { property: 'propTypes' },
    //     { object: 'Tasks' },
      // ]
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'no-console': 0,
    'no-underscore-dangle': [2, {
      allow: ['_id'],
    }],
    'no-use-before-define': [2, 'nofunc'],
    'space-before-function-paren': 0,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-unused-vars': 'warn',
  },
};

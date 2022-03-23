module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', 'prettier'
  ],
  rules: {
    'prettier/prettier' : error,
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': [error, { argsIgnorePattern: 'next' }],
    
  },
};

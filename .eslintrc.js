module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
    // sourceType: 'script'
  },
  plugins: ['prettier', 'node'],
  rules: {
    'prettier/prettier': 'warn',
  },
};

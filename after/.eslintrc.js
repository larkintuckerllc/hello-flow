module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'import',
    'flowtype',
  ],
  env: {
    node: true,
  },
};

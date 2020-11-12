module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    indent: [2, 2],
    'no-tabs': 2,
    'no-new': 0,
    'space-before-function-paren': [2, 'never'],
    'array-bracket-spacing': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0
  }
}

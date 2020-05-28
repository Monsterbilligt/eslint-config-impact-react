module.exports = {
  extends: [
    'standard',
    'standard-react'
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'default-case': [
      'error'
    ],
    'react/jsx-curly-newline': 0
  },
  env: {
    browser: true
  },
  globals: {
    FIREBASE_ENVIRONMENT: 'readonly'
  }
}

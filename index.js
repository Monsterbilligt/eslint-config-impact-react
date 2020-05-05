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
    ]
  },
  env: {
    browser: true
  },
  globals: {
    FIREBASE_ENVIRONMENT: 'readonly'
  }
}

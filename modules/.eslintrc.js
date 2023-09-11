// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "no-unused-vars": ["error", { args: "none" }]
  },
  globals: {
    Class: true,
    Render: true,
    that: true,
    commonUtil: true,
    w: true,
    d: true
  },
  // eslint-disable-next-line no-dupe-keys
  parserOptions: {
    sourceType: 'module'
  }
};
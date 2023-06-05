module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "no-unused-vars": ["error", { args: "none" }],
    'no-import-assign': 'off'
  },
  globals: {
    "$": true,
    layui: true,
    w: true,
    d: true,
    Base64: true,
    JSEncrypt: true,
    sha256: true,
    JsErrorTrace: true
  },
  // eslint-disable-next-line no-dupe-keys
  parserOptions: {
    sourceType: 'module'
  }
};
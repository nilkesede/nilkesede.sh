module.exports = {
  extends: [
    'xo-space/esnext',
    'plugin:unicorn/recommended'
  ],
  plugins: [
    'unicorn'
  ],
  env: {
    browser: true,
    serviceworker: true
  }
};

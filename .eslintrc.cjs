module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};

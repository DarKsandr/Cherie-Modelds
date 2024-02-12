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
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'import/no-unresolved': 'off',
  },
};

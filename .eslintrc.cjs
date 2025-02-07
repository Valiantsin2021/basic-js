module.exports = {
  plugins: ['prettier'],
  extends: 'eslint:recommended',
  extends: ['plugin:chai-friendly/recommended'],
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
        tabWidth: 2
      }
    ],
    'no-console': 'off',
    'no-extra-parens': ['warn', 'all'],
    'array-callback-return': 'error',
    curly: 'error',
    'default-case': 'warn',
    eqeqeq: ['error', 'always'],
    'no-caller': 'error',
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'warn',
    'no-return-assign': 'warn',
    'no-self-compare': 'error',
    'no-useless-call': 'error',
    'no-undef-init': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'max-len': ['error', { code: 150, ignoreComments: true }],
    'new-cap': ['error', { newIsCap: true }],
    'new-parens': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-prototype-builtins': 'off',
    'no-var': 'warn',
    'no-unused-vars': ['warn', { vars: 'local' }],
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]
  }
}

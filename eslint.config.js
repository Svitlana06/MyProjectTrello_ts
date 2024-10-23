import { defineConfig } from 'eslint-define-config';
import mocha from 'eslint-plugin-mocha';

export default [
  defineConfig({
    files: ['src/features/step-difinitions/**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        browser: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
      },
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-undef': 'error',
      'comment-format': [true, 'check-space'],
      curly: true,
      forin: true,
    },
    plugins: {
      mocha,
    },
  }),
];
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';

export default [
  // Ignore generated and external artifacts
  {
    ignores: ['dist/', '.astro/', 'node_modules/', '**/*.d.ts']
  },

  // Base JS rules (very conservative)
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      ...js.configs.recommended.rules,

      // Keep noise low
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': 'off'
    }
  },

  // Astro-specific rules
  {
    files: ['**/*.astro'],
    plugins: {
      astro
    },
    languageOptions: {
      parser: astro.parser
    },
    rules: {
      ...astro.configs.recommended.rules
    }
  }
];

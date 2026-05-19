import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
  }, {
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      '@stylistic/semi': ['error', 'always'],
    },
  }),
  // ...your other rules
);

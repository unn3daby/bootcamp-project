// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    apiBaseUrl: '',
    apiKey: '',
    public: {
      defaultLocale: 'en',
    },
  },

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },

  svgo: {
    defaultImport: 'component',
  },

  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
    ],
  },

  modules: [
    '@nuxt/eslint',
    'nuxt-svgo',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
});
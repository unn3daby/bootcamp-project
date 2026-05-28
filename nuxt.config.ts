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
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  modules: ['@nuxt/eslint'],
});

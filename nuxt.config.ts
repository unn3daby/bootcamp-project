// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

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
    typeCheck: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
})

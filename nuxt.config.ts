import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Add Tailwind CSS configuration
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: 'https://64a5371300c3559aa9bf48d0.mockapi.io/api/v1/',
    },
  },
  // Configure the HTTP module
  modules: ['@nuxtjs/tailwindcss'],
  // Other Nuxt configuration options...
};

export default config;

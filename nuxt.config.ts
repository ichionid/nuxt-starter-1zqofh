import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Add Tailwind CSS configuration
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  // Configure the HTTP module
  modules: ['@nuxt/http', '@nuxtjs/tailwindcss'],
  http: {
    // Enable mocking
    mock: true,
  },

  // Define your API mocks
  serverMiddleware: ['~/mocks/index.js'],

  // Other Nuxt configuration options...
};

export default config;

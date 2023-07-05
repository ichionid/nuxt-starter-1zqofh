import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Add Tailwind CSS configuration
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  // Configure the HTTP module
  modules: ['@nuxtjs/tailwindcss'],
  // Other Nuxt configuration options...
};

export default config;

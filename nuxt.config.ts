// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: { '@': resolve(__dirname, '/') },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
});

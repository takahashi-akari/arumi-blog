// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  app : {
    baseURL: '' //'/arumi-blog/'
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss','github-markdown-css'],
})

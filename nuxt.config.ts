// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  app : {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa', 
        dir: "rtl"
      }
    }
  },
  devServer: {
    port: 4000
  },
})

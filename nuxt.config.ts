// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@element-plus/nuxt'
  ],
  elementPlus: {},
  css: [
    '~/assets/css/global.css',
    '~/assets/css/global.scss' // 导入全局SCSS
  ]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@element-plus/nuxt', "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        "code": "zh-CN",
        "iso": "zh-CN",
        "name": "中文（中国）",
        "file": "zh-CN.json"
      },
      {
        code: 'en-US',//地址栏使用，比如www.baidu.com/en-US/about
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.json'
      },
      {
        "code": "ja-JP",
        "iso": "ja-JP",
        "name": "日本語",
        "file": "ja-JP.json"
      },
      {
        "code": "ko-KR",
        "iso": "ko-KR",
        "name": "한국어",
        "file": "ko-KR.json"
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh-CN',
    strategy: 'prefix_and_default',
  },
  elementPlus: {},
  css: [
    '~/assets/css/global.css',
    '~/assets/css/global.scss' // 导入全局SCSS
  ]
})
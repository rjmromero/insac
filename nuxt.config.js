
export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Grupo Empresarial INSAC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Brindamos soluciones de software contable para pequeñas y medianas empresas' }
    ],
    script: [
      { src: 'https://tracker.metricool.com/resources/be.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pwa: {
    manifest: {
      name: 'Grupo Empresarial INSAC',
      short_name : 'INSAC',
      description  : 'Brindamos soluciones de software contable para pequeñas y medianas empresas',
      theme_color: '#2f2830',
      background_color: '#2f2830',
      lang: 'es'
    },
    meta: {
      author: 'INSAC',
      name: 'INSAC',
      description: 'Brindamos soluciones de software contable para pequeñas y medianas empresas',
      ogSiteName: 'INSAC',
      ogTitle: 'INSAC',
      ogDescription: 'Brindamos soluciones de software contable para pequeñas y medianas empresas',
      ogHost: 'https://https://insac.co',
      ogImage: 'https://https://insac.co/icon.png',
      ogUrl: 'https://https://insac.co',
      twitterCard: 'https://https://insac.co/icon.png',
      twitterSite: 'geinsac',
      twitterCreator: 'INSAC'
    }
  },
  googleFonts: {
    families: {
      'Work+Sans': [500, 700]
    },
    display: 'swap'
  },
  loading: { color: '#2f2830' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/variables.css', lang: 'css' },
    { src: '~assets/css/main.css', lang: 'css' },
    { src: '~assets/css/swiper.css', lang: 'css' },
    { src: '~assets/css/unicons.css', lang: 'css' }
  ],
  googleAnalytics: {
    id: "G-00FXZE54XX",
    dev: false
  },
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  oneSignal: {
    init: {
      appId: '41313806-c0e8-48dd-b8a8-2de5fabe9c75'
    },
    cdn: true,
    OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
  },
  axios: {
    proxy: true
  },
  proxy: {
    // '/api/v1/': { target: 'https://insac.co/' }
    // '/api/v1/': { target: 'http://localhost:6000' }
  },
  build: {
    cssSourceMap: false
  },

  vue: {
    config: {
      productionTip: false,
      devtools: false
    }
  },

  server: {
    port: 6003
  }
}

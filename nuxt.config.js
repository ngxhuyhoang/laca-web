import colors from 'vuetify/es5/util/colors'
import { firebaseConfig } from './firebase-config'
import VnLocale from './i18n/locales/vi-VN'
import EnLocale from './i18n/locales/en-US'

export default {
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
  ssr: false,
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'La Cà | Du lịch, sống ảo, ăn uống',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',

    // https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  firebase: {
    config: firebaseConfig,
    services: {
      auth: true,
      messaging: true,
      analytics: true,
    },
  },

  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'vi',
      messages: {
        en: EnLocale,
        vi: VnLocale,
      },
    },
  },
}

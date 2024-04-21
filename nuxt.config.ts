export default defineNuxtConfig({
  imports: {
    dirs: ['store'],
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/dp_logo.ico' }],
      meta: [
        {
          name: 'viewport',
          content:
            'initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width',
        },
      ],
      script: [
        { src: 'https://polyfill.io/v3/polyfill.min.js?features=default' },
      ],
      title: 'VHP Dev Test',
    },
  },
  css: [
    '@mdi/font/css/materialdesignicons.css',
    '@vuepic/vue-datepicker/dist/main.css',
    '~/assets/style/main.scss',
  ],
  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  modules: ['@nuxtjs/tailwindcss', [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ]],
  hooks: {
    'components:dirs': function (dirs: any) {
      dirs.push({
        path: '~/components',
      });
    },
  },
  components: {
    global: true,
  },
  typescript: {
    shim: false,
  },
});

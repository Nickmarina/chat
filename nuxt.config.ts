import { Configuration } from '@nuxt/types';

const nuxtConfig: Configuration = {
  // ssr: false,
  // target: 'static',
  head: {
    title: 'chat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    
  ],

  loading:{color:'white'},

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
  },
  
  proxy: {
    '/api/': { target: 'https://chat-server-nestjs.herokuapp.com/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
  build: {
  }, 
};

export default nuxtConfig;
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import { createRuntimeConfig, createViteConfig } from "./build";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head
    head: {
      title: "EOPI Warranty & Service",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "ElementPlus + Nuxt3",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devServer: {
    https: {
      key: "server.key",
      cert: "server.crt",
    },
    port: 4305, // default: 3000
    host: "nuxt-test.local.com", // default: localhost
    // host: "crest-rma.local.com", // default: localhost
  },
  // css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "assets/scss/index.scss",
    "bootstrap/dist/css/bootstrap.min.css",
    "primevue/resources/themes/aura-light-green/theme.css",
    "vue-loading-overlay/dist/css/index.css",
  ],
  // build modules
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@element-plus/nuxt", "@nuxtjs/color-mode", "nuxt-primevue", "nuxt-swiper", "@vant/nuxt"],
  plugins: ["~/plugins/fontawesome", { src: "~/plugins/jquery.client", mode: "client" }],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // colorMode
  colorMode: {
    classSuffix: "",
  },
  // unocss: {
  //   uno: true,
  //   attributify: true,
  //   icons: {
  //     scale: 1.2,
  //   },
  // },
  vite: createViteConfig(),
  runtimeConfig: createRuntimeConfig(),
  elementPlus: {
    // icon: 'ElIcon',
    // importStyle: 'scss',
    // themes: ['dark'],
  },
  swiper: {
    modules: ["pagination", "navigation"],
  },
});

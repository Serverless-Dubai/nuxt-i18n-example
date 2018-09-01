const { API_ROOT, I18N } = require("./config");

module.exports = {
  mode: "universal",
  head: {
    title: "nuxt-i18n-example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  build: {
    vendor: ["axios"],
    publicPath: `/${require("./secrets.json").NODE_ENV}/_nuxt/`
  },
  // srcDir: "./",
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false,
  modules: [
    ["nuxt-i18n", I18N],
    [
      "@nuxtjs/axios",
      {
        baseURL: API_ROOT
      }
    ]
  ]
};

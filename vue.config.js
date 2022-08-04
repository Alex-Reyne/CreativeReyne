module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("VuetifyLoaderPlugin").tap(() => [
      {
        progressiveImages: true
      }
    ]);
  },
  pluginOptions: {
    sitemap: {
      urls: [
        "https://creativereyne.ca/",
        "https://creativereyne.ca/home",
        "https://creativereyne.ca/build-your-brand",
        "https://creativereyne.ca/contact",
        "https://creativereyne.ca/portfolio"
      ]
    }
  }
};

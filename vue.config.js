const { defineConfig } = require('@vue/cli-service')

const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },



  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    hot: true,
    allowedHosts: ['mobile.auto-home.com.au'],
    // eslint-disable-next-line no-undef
    open: false,
    port: '8080',

    compress: true,
    proxy: {
      '/api': {
        // target: 'http://106.14.72.252', // 请求地址
        target: 'http://3.24.93.132:8081', // 请求地址
        // logLevel: 'debug',
        changeOrigin: true
        // pathRewrite: {
        //   ["^" + process.env.VUE_APP_BASE_API]: ""
        // }

    },
  }
}
})

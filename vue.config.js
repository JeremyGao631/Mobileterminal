const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    hot: true,
    // eslint-disable-next-line no-undef
    open: false,

    compress: true,
    proxy: {
      '/api': {
        // target: 'http://106.14.72.252', // 请求地址
        target: 'http://106.14.73.29:8081', // 请求地址
        // logLevel: 'debug',
        changeOrigin: true
        // pathRewrite: {
        //   ["^" + process.env.VUE_APP_BASE_API]: ""
        // }

    },
  }
}
})

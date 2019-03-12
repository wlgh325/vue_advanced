module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localshot:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
      }
    }
  }
}

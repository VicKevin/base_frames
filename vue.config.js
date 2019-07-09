module.exports = {
  devServer: {
    // development server port 9001
    port: 9000,
  },
  // publicPath: '',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'link-color': '#1890ff',
          'border-radius-base': '6px'
        },
        javascriptEnabled: true
      }
    }
  }
}

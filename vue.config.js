module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/token': {
        target: 'https://account.kkbox.com/oauth2/token',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

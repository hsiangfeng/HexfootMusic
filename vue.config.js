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
  pwa: {
    name: 'HexfootMusic',
    themeColor: '#69F0AE',
    msTileColor: '#00251a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
};

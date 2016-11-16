// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

//请求头里设置权限token
var onProxyReq = function (proxyReq, req, res) {
  proxyReq.setHeader('Authorization', 'Bearer ff4dc28c-4c30-4675-9fe3-635d98487b33');
}
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/catheter-service': {
        target: 'http://192.168.10.54:10001',
        pathRewrite: {
          '^/catheter-service': '/catheter-service/catheter'
        },
        onProxyReq: onProxyReq
      },
      '/baseinfo': {
        target: 'http://192.168.10.54:10001',
        pathRewrite: {
          '^/baseinfo': '/baseinfo'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: process.env.REACT_APP_URL,
  logLevel: 'debug',
  changeOrigin: true,
};
module.exports = function (app) {
  app.use('/api/v1', createProxyMiddleware(proxy));
};

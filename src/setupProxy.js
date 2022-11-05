const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: window.location.origin,
  logLevel: "debug",
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/api/v1", createProxyMiddleware(proxy));
};
const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: process.env.REACT_APP_URL,
  changeOrigin: true,
  logLevel: "debug",
};
module.exports = function (app) {
  app.use("/api/v1", createProxyMiddleware(proxy));
};

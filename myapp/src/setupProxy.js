const { createProxyMiddleware } = require('http-proxy-middleware');
//中间件
module.exports = function(app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/graphQL',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};
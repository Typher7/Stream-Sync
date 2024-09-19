const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://desolate-bayou-93955-64c6896ee0b5.herokuapp.com/', 
      changeOrigin: true,
    })
  );
};

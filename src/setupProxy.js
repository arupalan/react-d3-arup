const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/candles', {
      target: 'https://api-fxtrade.oanda.com/v1/candles/',
    })
  );
};

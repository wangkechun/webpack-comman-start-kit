'use strict';

process.env.NODE_ENV = 'development';
process.env.HOT_RELOAD = 'true';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false,
    colors: true,
  },
  proxy: {
    '/v1/*': {
      target: 'http://localhost:8000',
      secure: false
    }
  }
}).listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:' + port);
});
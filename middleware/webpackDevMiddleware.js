const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./../webpack.config.js')('development');

const compiler = webpack(config);

module.exports = () => (
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

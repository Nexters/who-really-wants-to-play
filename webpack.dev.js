const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './src/assets'),
    },
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    ...common.output,
    publicPath: '/',
  },
});

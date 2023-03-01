const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsPath = './src/assets/';

module.exports = {
  entry: path.resolve(__dirname, './src/App.tsx'),
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `${assetsPath}/index.html`),
      favicon: path.resolve(__dirname, `${assetsPath}/favicon.ico`),
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
};

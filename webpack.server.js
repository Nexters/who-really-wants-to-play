const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    target: 'node',
    node: false, // it enables '__dirname' in files. If is not, '__dirname' always return '/'.
    entry: ['./src/server.tsx'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: [nodeExternals()],
  },
];

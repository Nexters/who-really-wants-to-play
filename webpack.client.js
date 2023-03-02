const path = require('path');

const nodeExternals = require('webpack-node-externals');

/**
 *
 * @param {'node' | 'web'} target
 * @returns {string[]}
 */

const getEntryPoint = (target) => {
  if (target === 'node') {
    return ['./src/App.tsx'];
  }
  return ['./src/index.tsx'];
};

const getConfig = (target) => ({
  name: target,
  target,
  entry: getEntryPoint(target),
  output: {
    path: path.resolve(__dirname, `dist/${target}`),
    filename: 'bundle.[fullhash].js',
    publicPath: '/web/',
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
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
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [...(target === 'web' ? [] : [])],
  externals: target === 'node' ? [nodeExternals()] : undefined,
});

module.exports = [getConfig('web'), getConfig('node')];

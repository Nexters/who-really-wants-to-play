const webpack = require('webpack');
const { merge } = require('webpack-merge');

const hotMiddlewareScript = `webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true`;

const developmentOption = function (env) {
  const isClient = env === 'client';
  const hotScript = isClient ? [hotMiddlewareScript] : [];
  const hmrPlugin = isClient ? [new webpack.HotModuleReplacementPlugin()] : [];
  return {
    mode: 'development',
    devtool: isClient ? 'inline-source-map' : undefined,
    entry: [...hotScript],
    plugins: [...hmrPlugin],
  };
};

module.exports = async function ({ env }) {
  const configs = await require(`./webpack.${env}.js`);
  return configs.map((config) => merge(config, developmentOption(env)));
};

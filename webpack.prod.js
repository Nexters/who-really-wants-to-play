const common = require('./webpack.common.js');

const { merge } = require('webpack-merge');

const productionOption = {
  mode: 'production',
};

console.info(
  `\n#######[${new Date()}]##############\n\n[INFO] Production build start!\n\n#########################################################\n`,
);

module.exports = merge(common, productionOption);

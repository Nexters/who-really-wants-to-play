const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

const productionOption = {
  mode: 'production',
};

console.info(
  `###########################[${new Date()}]##########################\n\n\n[INFO] Production build start!\n#####################################################\n`,
);

module.exports = merge(common, productionOption);

const { merge } = require('webpack-merge');

const productionOption = {
  mode: 'production',
};

console.info(
  `\n#######[${new Date()}]##############\n\n[INFO] Production build start!\n\n#########################################################\n`,
);

module.exports = async function ({ env }) {
  const configs = Object.values(await require(`./webpack.${env}.js`));
  return configs.map((config) => merge(config, productionOption));
};

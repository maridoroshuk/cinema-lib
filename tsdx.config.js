const image = require('@rollup/plugin-image');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  rollup(config, options) {
    config.plugins = [image(), peerDepsExternal(), ...config.plugins];
    return config;
  },
};

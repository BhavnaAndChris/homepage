const coreJsVersion = require('core-js/package.json').version;

/** @type {import('@babel/core').ConfigFunction} */
module.exports = (api) => {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: [
      ['@babel/preset-env', { corejs: coreJsVersion, useBuiltIns: 'entry' }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      ['@babel/preset-typescript'],
    ],
  };
};

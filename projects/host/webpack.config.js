const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const path = require('path');

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' },undefined,
      path.join(__dirname, '../../package.json')),
  },
});

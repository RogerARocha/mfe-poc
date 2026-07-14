const path = require('path');
const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'finance',

  exposes: {
    
    './routes': './projects/finance/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' },undefined,
      path.join(__dirname, '../../package.json')),
  },
});

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = withModuleFederationPlugin({
  name: 'hr',

  exposes: {
    './routes': './projects/hr/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' },undefined,
      path.join(__dirname, '../../package.json')),
  },
});

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = withModuleFederationPlugin({
  name: 'hr',

  exposes: {
    './ComponentHRMain': './projects/hr/src/app/pages/human-resources/human-resources.ts',
    './MemberDetails': './projects/hr/src/app/pages/member-details/member-details.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' },undefined,
      path.join(__dirname, '../../package.json')),
  },
});

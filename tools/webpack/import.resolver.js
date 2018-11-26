const path = require('path');
const appRootDir = require('app-root-dir');

module.exports = {
  resolve: {
    alias: {
      '@routes': path.resolve(appRootDir.get(), './src/routes/'),
      '@components': path.resolve(appRootDir.get(), './src/components/'),
      '@store': path.resolve(appRootDir.get(), './src/redux/modules/'),
      '@helpers': path.resolve(appRootDir.get(), './src/helpers/'),
      '@shared': path.resolve(appRootDir.get(), './shared/'),
    },
  },
};

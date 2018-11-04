const path = require("path");
const appRootDir = require("app-root-dir");

module.exports = {
  resolve: {
    alias: {
      "@shared": path.resolve(appRootDir.get(), "./shared/")
    }
  }
};

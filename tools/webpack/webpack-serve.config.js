require("@babel/register");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const history = require("connect-history-api-fallback");
const appRootDir = require("app-root-dir");
const convert = require("koa-connect");
const path = require("path");

const webpackMobileConfig = require("./webpack.config.babel").default;

webpackMobileConfig.plugins = [
  ...webpackMobileConfig.plugins,
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(appRootDir.get(), "./src/index.html"),
    chunksSortMode: "none"
  })
];

webpackMobileConfig.serve = {
  devMiddleware: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    publicPath: webpackMobileConfig.output.publicPath,
    logLevel: "silent",
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000
    }
  },
  host: "localhost",
  port: 5000,
  hotClient: {
    host: "localhost",
    port: 5001
  },
  add: (app, _middleware, _options) => {
    app.use(convert(history()));
  }
};

module.exports = webpackMobileConfig;

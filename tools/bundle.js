/**
 * Creates application bundles from the source files.
 */
import webpack from "webpack";

const debug = require("debug")("webpack:bundle");
const dir = process.env.DIR;

async function bundle() {
  const config = require(`./webpack/webpack.config.babel`).default;

  return new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if (err) {
        debug(err.stack || err);

        if (err.details) {
          debug(err.details);
        }

        reject(err);
      } else {
        const info = stats.toJson();

        if (stats.hasErrors()) {
          debug(info.errors);
        }

        if (stats.hasWarnings()) {
          debug(info.warnings);
        }

        resolve();
      }
    });
  });
}

export default bundle;

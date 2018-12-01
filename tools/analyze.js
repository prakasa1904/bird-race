/**
 * This script creates a webpack stats file on our production build of the
 * client bundle and then launches the webpack-bundle-analyzer tool allowing
 * you to easily see what is being included within your bundle.
 *
 * @see https://github.com/th0r/webpack-bundle-analyzer
 */

import webpack from 'webpack';
import fs from 'fs';
import path from 'path';
import appRootDir from 'app-root-dir';
import { exec } from './utils';

const paths = path.resolve(appRootDir.get(), `./webpack.config.babel.js`);
const webpackConfig = require(paths).default;

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.error(err);
  } else {
    const anaylzeFilePath = path.resolve(appRootDir.get(), webpackConfig.output.path, '__analyze__.json');

    // Write out the json stats file.
    fs.writeFileSync(anaylzeFilePath, JSON.stringify(stats.toJson('verbose'), null, 2));
    exec(`webpack-bundle-analyzer ${anaylzeFilePath} ${webpackConfig.output.path}`);
  }
});

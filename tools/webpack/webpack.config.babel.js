import appRootDir from 'app-root-dir';
import path from 'path';
import fs from 'fs-extra';
import cssnano from 'cssnano';
import AssetsPlugin from 'assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import SimpleProgressWebpackPlugin from 'simple-progress-webpack-plugin';
import safeParser from 'postcss-safe-parser';
import webpack from 'webpack';
import { ReactLoadablePlugin } from 'react-loadable/webpack';

import { isDev, isProd, isVerbose, ifDev, ifProd, lessLoaders } from './utils';
import { resolve as importResolver } from './import.resolver';

const buildPath = './build/client';

fs.emptyDirSync(path.resolve(appRootDir.get(), buildPath));

const webpackConfig = {
  /**
   * Output target to web
   */
  target: 'web',

  /**
   * The base directory
   * for resolving entry point
   */
  context: path.resolve(appRootDir.get()),

  /**
   * Define mode to let webpack
   * determine what plugin should be activated
   */
  mode: ifProd('production', 'development'),

  /**
   * Exit early if something wrong occured
   */
  bail: true,

  /**
   * Source map setting
   */
  devtool: ifDev('cheap-module-source-map', 'hidden-source-map'),

  /**
   * Entry files
   * Use custom polyfills
   */
  entry: {
    mobile: [
      '@babel/polyfill',
      ...ifDev(['react-hot-loader/patch'], []),
      path.resolve(appRootDir.get(), './src/index.js'),
    ],
  },

  /**
   * Output config
   * Buildpath and output name
   */
  output: {
    path: path.resolve(appRootDir.get(), buildPath),
    publicPath: '/',
    filename: ifDev('[name].js', '[name].[chunkhash].js'),
    chunkFilename: ifDev('chunk.[name].js', 'chunk.[name].[chunkhash].js'),
    crossOriginLoading: 'anonymous',
  },

  /**
   * Webpack 4 configuration
   * Auto minified in production, auto common chunk
   * the default is production
   */
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          filename: ifDev('vendor.js', 'vendor.[chunkhash].js'),
        },
      },
    },
    minimizer: ifProd([
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          parser: safeParser,
        },
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: false,
      }),
    ]),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(appRootDir.get(), 'node_modules')],
    alias: importResolver.alias,
    symlinks: false,
    cacheWithContext: false,
  },

  module: {
    // Makes missing export becomes compile error
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: isDev,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    useBuiltIns: 'entry',
                  },
                ],
                ['@babel/preset-react', { development: isDev, useBuiltIns: true }],
              ],
              plugins: [
                'lodash',
                'babel-plugin-macros',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-export-namespace-from',
                ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-syntax-async-generators',
                '@babel/plugin-syntax-dynamic-import',
                ['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
                ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
                'react-loadable/babel',
                ...ifDev(['react-hot-loader/babel', 'console'], []),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: lessLoaders(),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 1024,
              name(file) {
                return ifDev('[name].[ext]', '[hash:8].[ext]');
              },
              publicPath: path.resolve(appRootDir.get()),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    /**
     * Webpack progress plugin to see build progress
     */
    new SimpleProgressWebpackPlugin(),

    /**
     * Extract asset pathname
     */
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(appRootDir.get(), buildPath),
    }),

    new ReactLoadablePlugin({
      filename: path.resolve(appRootDir.get(), buildPath, 'react-loadable.json'),
    }),

    /**
     * Copy static assets
     * These copied folders will be deployed to S3 (Tokopedia CDN)
     */
    new CopyWebpackPlugin([
      {
        from: path.resolve(appRootDir.get(), './static'),
        to: path.resolve(appRootDir.get(), buildPath, 'assets'),
        flatten: true,
      },
    ]),

    /**
     * Webpack production plugin
     * These plugin only used in production env.
     */
    ...ifProd(
      [
        new MiniCssExtractPlugin({
          filename: ifDev('[name].css', '[name].[hash].css'),
          chunkFilename: ifDev('[id].css', '[id].[hash].css'),
        }),
        new HtmlWebpackPlugin({
          filename: path.resolve(appRootDir.get(), `${buildPath}/index.html`),
          template: path.resolve(appRootDir.get(), './src/index.html'),
          chunksSortMode: 'none',
          env: 'production',
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
      ],
      [],
    ),
  ],
};

export default webpackConfig;

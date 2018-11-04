import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postcssPresetEnv from "postcss-preset-env";

import { ifElse } from "../helpers/logic";

export const isDev = process.env.NODE_ENV === "development";
export const isProd = !isDev;
export const isVerbose = process.argv.includes("--verbose");

export const ifDev = ifElse(isDev);
export const ifProd = ifElse(isProd);

export const lessLoaders = ({ isClient = true, paths } = {}) => [
  ifDev("style-loader", MiniCssExtractPlugin.loader),
  {
    loader: isClient ? "css-loader" : "css-loader/locals",
    options: {
      minimize: !isDev,
      importLoaders: 2
    }
  },
  {
    loader: "postcss-loader",
    options: {
      plugins: () => [postcssPresetEnv({ stage: 2 })]
    }
  },
  {
    loader: "less-loader",
    options: {
      paths
    }
  }
];

let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let fs = require('fs');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let cssnano = require('cssnano');
// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === "production";
const outPath = isProd ? "lib/prod" : "lib/dev";
const entryName = isProd ? "libProdDll" : "libDevDll";
const devtool = isProd ? "#source-map" : "cheap-module-eval-source-map";

const vendors = [
  'vue',
  'vue-router',
  'vuex',
  'vuex-router-sync',
  'es6-promise',
  'classnames',
  'axios',
  'async-validator',
  "popper.js",
  "events",
];

let Config = {
  devtool: devtool,
  entry: {
    [entryName]: vendors,
  },
  output: {
    path: path.resolve(__dirname, outPath),
    filename: '[name].js',
    library: '[name]',
    publicPath: "/"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),//打包模块结构分析
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: !isProd,
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, `${outPath}/manifest.json`),
      name: '[name]',
      context: __dirname,
    }),
  ]
};
if (isProd) {
  Config.plugins = Config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        preamble: `/* ${new Date().toLocaleString()} */`,
        comments: false,  //remove all comments
      },
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_console: false,//设置为true时删除console.log
      },
      sourceMap: true
    }),
  ]);
}

module.exports = Config;

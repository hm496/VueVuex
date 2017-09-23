let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let fs = require('fs');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let cssnano = require('cssnano');
// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const PUBLIC_PATH = "/";
const prePath = "release/";
const outPath = "build";
const DllPath = {
  manifest: './lib/prod/manifest.json',
  filepath: './lib/prod/libProdDll.js',
  outputPath: `${prePath}js`,
  publicPath: `${PUBLIC_PATH}${prePath}js`
};

console.log(process.env.NODE_ENV === 'production');

module.exports = {
  devtool: "#source-map",
  entry: {
    app: ['./src/index'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `${prePath}js/[name].[chunkhash:7].js`,
    chunkFilename: `${prePath}js/[name].[id].[chunkhash:7].js`,
    publicPath: `${PUBLIC_PATH}`
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        loader: 'ejs-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cssModules: {
            localIdentName: '[name]__[local]-[hash:5]',
            camelCase: true
          },
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: [
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ],
              fallback: "vue-style-loader",
            }),
            css: ExtractTextPlugin.extract({
              use: [
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
              ],
              fallback: 'vue-style-loader'
            })
          }
        },
      },
      { test: /iview.src.*?js$/, loader: 'babel-loader' },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ]
      },
      {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        }),
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ]
        }),
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: `${prePath}media/[name].[hash:7].[ext]`,
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: `${prePath}img/[name].[hash:7].[ext]`,
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)(\?.*)?$/i,
        loader: 'file-loader',
        options: {
          name: `${prePath}font/[name].[hash:7].[ext]`,
        }
      },
    ],
  },
  resolve: {
    alias: {
      'vue': path.join(__dirname, 'node_modules', 'vue'),
      'src': path.resolve('src'),
      'assets': path.resolve('src/assets'),
      'utils': path.resolve('src/utils'),
      'store': path.resolve('src/store'),
      'api': path.resolve('src/api'),
      'iviewSrc': path.join(__dirname, 'node_modules', 'iview/src/components'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css', '.vue'],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(DllPath.manifest),
    }),
    // new BundleAnalyzerPlugin(),//打包模块结构分析
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: false,
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        /\.(jsx?|vue|css)$/.test(resource)
      ),
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.ejs'),
      inject: 'body', // Inject all scripts into the body
      // hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new AddAssetHtmlPlugin({
      filepath: DllPath.filepath,
      outputPath: DllPath.outputPath,
      publicPath: DllPath.publicPath
    }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath(`${prePath}css/[name].[contenthash:7].css`);
      },
      allChunks: true,
    }),
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
  ],
};


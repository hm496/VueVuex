let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let fs = require('fs');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let cssnano = require('cssnano');

module.exports = {
  devtool: "source-map",
  entry: {
    app: ['./src/index'],
    vendors: ['vue', 'vue-router', 'vuex'],
    polyfill: ['babel-polyfill', 'whatwg-fetch'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name]/entry.js",
    publicPath: "/"
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
              use: "css-loader!postcss-loader!sass-loader",
              fallback: "vue-style-loader",
            }),
            css: ExtractTextPlugin.extract({
              use: 'css-loader!postcss-loader',
              fallback: 'vue-style-loader'
            })
          }
        },
        include: [
          path.resolve(__dirname, 'src'),
        ]
      },
      {
        test: /\.js$/,
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
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          },
            "postcss-loader",
            "sass-loader"
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
            'css-loader',
            "postcss-loader",
          ]
        }),
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name]_[hash:base64:5].[ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name]_[hash:base64:5].[ext]',
        }
      },
    ],
  },
  resolve: {
    alias: {
      'vue': path.join(__dirname, 'node_modules', 'vue'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css', '.vue'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'polyfill'],
    }),//提取公共模块
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.ejs'),
      inject: 'body', // Inject all scripts into the body
      filename: 'index.html',
      hash: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,  //remove all comments
      },
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
      },
    }),
  ],
};


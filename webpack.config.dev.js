let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "js/[name].[hash:7].js",
    chunkFilename: 'js/[name].[id].[hash:7].js',
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
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
            css: 'vue-style-loader!css-loader',
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
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ],
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          'css-loader',
        ],
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]',
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        }
      },
    ],
  },
  resolve: {
    alias: {
      'vue': path.join(__dirname, 'node_modules', 'vue'),
      'src': path.resolve('src'),
      'assets': path.resolve('src/assets'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css', '.vue'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: true,
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.ejs'),
      inject: 'body', // Inject all scripts into the body
      // hash: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),//错误不打断程序
    new webpack.HotModuleReplacementPlugin(),//模块热替换
    new FriendlyErrorsPlugin(),
  ],
};


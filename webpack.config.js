const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const sharp = require('sharp')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// const webpackDevServer = require('webpack-dev-server')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const config = {
  entry: [/* '@babel/polyfill', */ './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //второе - куда
    publicPath: '/',
    // publicPath: path.resolve(__dirname, '/build/')
    // environment: {
    //   arrowFunction: false
    // },
  },
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    host: '192.168.0.110',
    inline: true,
    historyApiFallback: true,
    // hot: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom',
      React: 'react',
    }),
    new CleanWebpackPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    autoprefixer,
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
          noErrorOnMissing: true,
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], //rtl: импорт, после стили идут в отдельный файл
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ], //rtl: импорт, после стили идут в отдельный файл
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    // minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        // parallel: true,
        extractComments: false,
      }),
    ],
  },
  //target: 'web',
}
if (!isProd) config.devtool = 'source-map'
module.exports = config

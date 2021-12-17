const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PROJECT_PATH, SERVER_HOST } = require('../constant');

module.exports = {
  infrastructureLogging: {
    colors: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    })
  ],
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(PROJECT_PATH, './dist'),
    publicPath: '/'
  },
  stats: 'errors-only',
  devServer: {
    client: {
      reconnect: 5
    },
    historyApiFallback: true,
    open: true,
    host: SERVER_HOST,
    hot: true
  },
  target: 'web'
};

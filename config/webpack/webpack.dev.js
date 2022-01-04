const path = require('path');

const { PROJECT_PATH, SERVER_HOST } = require('../constant');

module.exports = {
  infrastructureLogging: {
    colors: true
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  },
  mode: 'development',
  devtool: 'source-map',
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
    host: SERVER_HOST,
    hot: true
  },
  target: 'web'
};

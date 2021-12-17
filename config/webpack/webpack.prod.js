const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PROJECT_PATH } = require('../constant');
const config = {
  mode: 'production',
  devtool: false,
  target: 'browserslist',
  output: {
    clean: true, // Clean the output directory before emit.
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(PROJECT_PATH, './dist'),
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
      ignoreOrder: true
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] }
        }
      })
    ]
  }
};

// 因为rc环境与生产环境打包 配置都使用prod的配置，所以通过环境变量进行简单配置的区分
if (process.env.API_ENV === 'rc') {
  config.devtool = 'cheap-module-source-map';
  config.output.sourceMapFilename = '[name].[hash].js.map';
}
module.exports = config;

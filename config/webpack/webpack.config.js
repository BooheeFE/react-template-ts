const common = require('./webpack.common');
const { isDevelopment } = require('../env');
const { merge } = require('webpack-merge');

let config;
// 可以根据具体情况进行自定义 config
if (isDevelopment) {
  config = require('./webpack.dev');
} else {
  config = require('./webpack.prod');
}
module.exports = merge(common, config);

// Example of DRY config!
const WebpackStripLoader = require('strip-loader')
// Load exported object and extend it:
const devConfig = require('./webpack.config.js')
const stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  // Get rid of unused stuff e.g. logging and debug
  loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader)
module.exports = devConfig

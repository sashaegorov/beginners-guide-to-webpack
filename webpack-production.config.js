const Webpack = require('webpack')
const WebpackStripLoader = require('strip-loader')
// Load Development config
const devConfig = require('./webpack.config.js')

// Add 'NODE_ENV' key with 'production' environment.
// This will force building of React in porduction mode.
const productionEnv = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

// Define loader dynamicaly
const stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log')
}

// Extend Development configuration
devConfig.plugins.push(productionEnv)
devConfig.module.loaders.push(stripLoader)

module.exports = devConfig

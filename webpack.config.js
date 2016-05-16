module.exports = {
  entry: './app.es6',
  output: {
    filename: './bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    // Used to resolve extensions in `require`
    extensions: ['', '.js', '.es6']
  },
  // Doesn't work anymore
  watch: true
}

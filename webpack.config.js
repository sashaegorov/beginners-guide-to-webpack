module.exports = {
  entry: './app',
  output: {
    filename: './bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc.yml',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
  // Disable due to `webpack-dev-server`
  // watch: true
}

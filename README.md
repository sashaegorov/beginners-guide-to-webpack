# Beginner’s guide to Webpack

Following [story](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.ijtu08fj7) on Medium.

#### Quite short version of content

- Install WebPack `npm install webpack -g`
- Create bundle `webpack ./app.js bundle.js`
- After `webpack.config.js` created it's possible to simply run `webpack`
- Added `watch: true`, no it's running all time and waiting for files' changes
- Install Dev server `npm install webpack-dev-server -g` and need to run it as `webpack-dev-server --inline`
- Webpack will detect module loading e.g. `require('./logger')`
- Minimal amount of stuff to become really cool JavasScript developer… `npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev`... Meaning of this _stuff_ (as the original article explains it):
  * **`babel-core`** is the Babel's core npm package
  * **`babel-loader`** is the Babel module loader for Webpack
  * **`jshint`** is a tool that helps to detect errors and potential problems in your JavaScript source code
  * **`jshint-loader`** is the `jshint` loader module for Webpack
  * **`node-libs-browser`** is a peer dependency of Webpack. It provides certain Node libraries for browser usage.
  * **`babel-preset-es2015`** is a Babel preset for all `es2015` plugins.
  * **`babel-preset-react`** is a Babel preset for all React plugins.
  * **`-- save-dev`** saves these modules as development dependencies in `package.json`
- `jshint` will warn about dangerous JavaScript in your code
- Now it's better to use `npm start`

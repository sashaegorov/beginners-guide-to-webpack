# Beginner’s guide to Webpack

Following [story](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.ijtu08fj7) on Medium.

#### Quite short version of content

- Install WebPack `npm install webpack -g`
- Create bundle `webpack ./app.js bundle.js`
- After `webpack.config.js` created it's possible to simply run `webpack`
- Added `watch: true`, no it's running all time and waiting for files' changes
- Install Dev server `npm install webpack-dev-server -g`
- Webpack will detect module loading e.g. `require('./logger')`

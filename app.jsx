document.write('Welcome to the Webpack/ES6!')
console.log('App loaded hopefully!')
// Boom!
require('./logger.js')

import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'
ReactDOM.render(
  <Hello name='World' />,
  document.body
)

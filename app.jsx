// As seen here: http://stackoverflow.com/questions/33183931/
require('./index.html')

import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'

ReactDOM.render(
  <Hello name='Webpack/ES6' />,
  document.getElementById('hello')
)

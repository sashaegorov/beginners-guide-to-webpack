require('./index.html')
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'

ReactDOM.render(
  <Hello name='World' />,
  document.getElementById('hello')
)

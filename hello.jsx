import React from 'react'
import Greeter from './greeter'
export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to the Webpack/ES6!</p>
        <p>{Greeter.check('alex', 'egorov')}</p>
      </div>
    )
  },
})

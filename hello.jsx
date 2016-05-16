import React from 'react'
import Greeter from './greeter'
export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p><strong>Welcome to the Webpack/ES6!</strong></p>
        <p>{Greeter.check('alex', 'egorov')}</p>
      </div>
    )
  },
})

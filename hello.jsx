import React from 'react'
import Greeter from './greeter'
export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Welcome to the {this.props.name}!</h1>
        <p>{Greeter.check('alex', 'egorov')}</p>
      </div>
    )
  },
})

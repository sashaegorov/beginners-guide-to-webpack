import React from 'react'
import Greeter from './greeter'
export default React.createClass({
  getInitialState: function () {
    return { clicked: false }
  },
  handleClick: function (event) {
    this.setState({ clicked: !this.state.clicked })
  },
  render: function () {
    return (
      <div>
        <h1>Welcome to the {this.props.name}!</h1>
        <p
          onClick={this.handleClick}
          style={{ color: (this.state.clicked ? 'black' : 'grey') }}>
          {Greeter.check('alexander', 'egorov')}
        </p>
      </div>
    )
  },
})

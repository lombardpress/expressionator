import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {





    return (
      <div className="navbar">
        Manage:
        <button onClick={this.props.handleViewSwitch}>Person Info</button> |
        <button onClick={this.props.handleViewSwitch}>Text Info</button>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.switchToPersonCreationView = this.switchToPersonCreationView.bind(this);
    this.switchToEdfCreationView = this.switchToEdfCreationView.bind(this);
  }
  switchToPersonCreationView(){
    this.props.changeDataCreationView("personCreation")
  }
  switchToEdfCreationView(){
    this.props.changeDataCreationView("edfCreation")
  }
  render() {
    return (
      <div className="navbar">
        Manage:
        <button onClick={this.switchToPersonCreationView}>Person Info</button> |
        <button onClick={this.switchToEdfCreationView}>Text Info</button>
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof NavBar
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof NavBar
 * @private
 */
const mapDispatchToProps = dispatch => ({
  changeDataCreationView: (view) => (
    dispatch(actions.changeDataCreationView(view))
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class PersonsListItem extends Component {
  constructor(props) {
    super(props);
    this.handlePersonSelect = this.handlePersonSelect.bind(this);
  }
  handlePersonSelect(){
    this.props.assignPerson(this.props.personTitle, "description")
  }
  render() {
    return (
      <p onClick={this.handlePersonSelect} ref="item" value={this.props.personId} name={this.props.personTitle} key={this.props.personId}>{this.props.personTitle}</p>
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
    personInfo: state.personInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof PersonsListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignPerson: (name, description) => (
    dispatch(actions.assignPerson(name, description))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonsListItem);

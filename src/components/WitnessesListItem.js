import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class WitnessesListItem extends Component {
  constructor(props) {
    super(props);
    this.handleWitnessSelect = this.handleWitnessSelect.bind(this);
  }
  handleWitnessSelect() {
    this.props.attachWitness(this.props.witnessTitle, "description")
  }
  render() {
    return (
      <p onClick={this.handleWitnessSelect} ref="item" value={this.props.witnessId} name={this.props.witnessTitle} key={this.props.witnessId}>{this.props.witnessTitle}</p>

    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof PersonsListItem
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessInfo: state.witnessInfo,
    witnessesInfo: state.witnessesInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof PersonsListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  attachWitness: (name, description) => (
    dispatch(actions.attachWitness(name, description))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessesListItem);

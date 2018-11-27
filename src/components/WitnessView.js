import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class WitnessView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="data-creation-form" onClick={() => this.props.changeFocusedWitness(this.props.id)}>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof PersonCreation
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
 * @memberof PersonCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({
  changeFocusedWitness: (id) => (
    dispatch(actions.changeFocusedWitness(id))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessView);

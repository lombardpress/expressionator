import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
import WitnessCreation from "./WitnessCreation";

class WitnessesCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Witnesses creation</h2>
        <WitnessCreation />
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof WitnessCreation
 * @private
 */
const mapStateToProps = state => ({
  edfInfo: state.edfInfo,
  personsInfo: state.personsInfo,
  personInfo: state.personInfo,
  witnessInfo: state.witnessInfo,
  witnessesInfo: state.witnessesInfo,
  view: state.view
});

const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WitnessesCreation);

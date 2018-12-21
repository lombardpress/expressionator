import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";

class WitnessCreation extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewWitness = this.handleAddNewWitness.bind(this);
  }
  componentDidMount() { }

  handleAddNewWitness(e) {
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    this.props.createAndAttachWitness(title, description);
    //clears form after submission; not sure this is the correct react way to do this.
    this.refs.form.title.value = "";
    this.refs.form.description.value = "";
  }
  render() {
    return (
      <div className="data-creation-form">
        <h3>Assign New Witness</h3>
        <form ref="form" onSubmit={this.handleAddNewWitness}>
          <label>Title</label>
          <input
            type="text"
            name="title"
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
          />
          <input type="submit" />
        </form>
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

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WitnessCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({
  createAndAttachWitness: (name, description) =>
    dispatch(actions.createAndAttachWitness(name, description))

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WitnessCreation);

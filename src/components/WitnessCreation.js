import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
import { Button, FormGroup, InputGroup} from "@blueprintjs/core";

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
    const manifest = this.refs.form.manifest.value;
    this.props.createAndAttachWitness({title: title, description: description, manifest: manifest});
    //clears form after submission; not sure this is the correct react way to do this.
    this.refs.form.title.value = "";
    this.refs.form.description.value = "";
    this.refs.form.manifest.value = "";
  }
  render() {
    return (
      <div className="data-creation-form">
        <h3>Assign New Witness</h3>
        <form onSubmit={this.handleAddNewWitness} ref="form">
          <FormGroup  label="Title" labelFor="title">
            <InputGroup
                id="title"
                placeholder="title"
            />
            </FormGroup>
            <FormGroup  label="Description" labelFor="description">
              <InputGroup
                  id="description"
                  placeholder="description"

              />
            </FormGroup>
            <FormGroup  label="Manifest" labelFor="manifest">
              <InputGroup
                  id="manifest"
                  placeholder="manifest"

              />
            </FormGroup>
          <Button type="submit">Submit</Button>
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
  createAndAttachWitness: (info) =>
    dispatch(actions.createAndAttachWitness(info))

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WitnessCreation);

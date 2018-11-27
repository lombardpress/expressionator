import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";

class WitnessCreation extends Component {
  constructor(props) {
    super(props);
    this.handleWitnessUpdate = this.handleWitnessUpdate.bind(this);
  }
  componentDidMount() { }
  handleWitnessUpdate(e) {
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    if (this.props.view.focusedWitness) {
      this.props.updateWitness(this.props.view.focusedWitness, title, description)
    } else {
      this.props.attachWitness(title, description);
    }
  }
  render() {
    const defaultValue = (type, witnessInfo, view) => {
      if (view.focusedWitness) {
        return witnessInfo.find(wit => wit.id === view.focusedWitness)[type]
      } else {
        return ''
      }
    }

    return (
      <div className="data-creation-form">
        <h3>Witness Info</h3>
        <form ref="form" onSubmit={this.handleWitnessUpdate}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={defaultValue('title', this.props.witnessInfo, this.props.view)}
            key={defaultValue('title', this.props.witnessInfo, this.props.view)}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            defaultValue={defaultValue('description', this.props.witnessInfo, this.props.view)}
            key={defaultValue('description', this.props.witnessInfo, this.props.view)}
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
  attachWitness: (name, description) =>
    dispatch(actions.attachWitness(name, description)),
  updateWitness: (id, name, description) =>
    dispatch(actions.updateWitness(id, name, description))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WitnessCreation);

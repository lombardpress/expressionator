import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class WitnessView extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleRemoveWitness = this.handleRemoveWitness.bind(this);
    this.handleFocusWitness = this.handleFocusWitness.bind(this);
    this.state = {
      editMode: false,
    }
  }
  componentDidMount() {

  }

  handleToggleEdit(e){
    e.preventDefault();
    const title = this.refs.title.textContent;
    const description = this.refs.description.textContent;

    if (this.state.editMode){
      this.props.updateWitness(this.props.id, title, description)
    }
    this.setState((state) => ({editMode: !state.editMode}))
  }
  handleRemoveWitness(e){
    e.preventDefault();
    this.props.unAttachWitness(this.props.id)
    if (this.props.id === this.props.view.focusedWitness){
      this.props.changeFocusedWitness("")
    }
  }
  handleFocusWitness(e){
    e.preventDefault();
    this.props.changeFocusedWitness(this.props.id)
    const witness = this.props.witnessesInfo.find((w) => w.id === this.props.id)
    if (witness){
      const manifestId = witness.manifest
      this.props.fetchManifest(manifestId)
    }
  }

  render() {

    return (
      <div>
        <p ref="id">{this.props.id}</p>
        <p contentEditable={this.state.editMode} ref="title">{this.props.title}</p>
        <p contentEditable={this.state.editMode} ref="description">Description: {this.props.description}</p>
        <p contentEditable={this.state.editMode} ref="manifest">Manifest: {this.props.manifest}</p>
        <button onClick={this.handleToggleEdit}>Toggle Edit</button>
        <button onClick={this.handleRemoveWitness}>Remove</button>
        <button onClick={this.handleFocusWitness}>Focus</button>
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
  ),
  updateWitness: (id, name, description) =>
    dispatch(actions.updateWitness(id, name, description)),
  unAttachWitness: (id) =>
    dispatch(actions.unAttachWitness(id)),
  fetchManifest: (manifestId) =>
    dispatch(actions.fetchManifest(manifestId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessView);

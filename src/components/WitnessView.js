import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class WitnessView extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
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

  render() {

    return (
      <div onClick={() => this.props.changeFocusedWitness(this.props.id)}>
        <p contentEditable={this.state.editMode} ref="title">{this.props.title}</p>
        <p contentEditable={this.state.editMode} ref="description">Description: {this.props.description}</p>
        <button onClick={this.handleToggleEdit}>Toggle Edit</button>
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessView);

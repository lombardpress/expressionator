import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

import { Button } from "@blueprintjs/core";

// import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';


class PersonViewer extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleAssignNewPerson = this.handleAssignNewPerson.bind(this);
    this.state = {
      editMode: false,
    }
  }
  componentDidMount() {

  }
  handleAssignNewPerson(e){
    e.preventDefault();
    this.props.clearPersonInfo()
    this.setState((state) => ({editMode: true}))
  }
  handleToggleEdit(e){
    e.preventDefault();
    const title = this.refs.title.textContent;
    const description = this.refs.description.textContent;
    if (this.state.editMode){
      if (this.props.personInfo.id){
        this.props.updatePerson({id: this.props.personInfo.id, title: title, description: description})
      }
      else{
        this.props.createAndAssignPerson({title: title, description: description});
      }
    }
    this.setState((state) => ({editMode: !state.editMode}))
  }

  render() {
    let title = ""
    let description = ""
    const person = this.props.personsInfo.find((p) => p.id === this.props.personInfo.id)
    if (person){
      title = person.proposedChange ? person.proposedChange.title : person.title;
      description = person.proposedChange ? person.proposedChange.description : person.description;
    }
    return (
      <div>
        <h3>Person Info</h3>
        <div>
          <p>Author ID: {this.props.personInfo.id}</p>
          <p>Author</p>
          <p contentEditable={this.state.editMode} ref="title">
            {title}
          </p>
        </div>
        <div>
          <p>Description</p>
          <p contentEditable={this.state.editMode} ref="description">
            {description}</p>
        </div>
        <Button onClick={this.handleToggleEdit} active={this.state.editMode}>Toggle Edit</Button>
        <Button onClick={this.handleAssignNewPerson}>Assign New Person Entry</Button>
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
 * @memberof PersonViewer
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignPerson: (info) => (
    dispatch(actions.assignPerson(info))
  ),
  clearPersonInfo: () => (
    dispatch(actions.clearPersonInfo())
  ),
  updatePerson: (info) => (
    dispatch(actions.updatePerson(info))
  ),
  createAndAssignPerson: (info) => (
    dispatch(actions.createAndAssignPerson(info))
  )

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonViewer);

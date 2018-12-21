import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class EdfViewer extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleCreateNewEdf = this.handleCreateNewEdf.bind(this);
    this.state = {
      editMode: false,
    }
  }
  componentDidMount() {

  }
  handleCreateNewEdf(e){
    e.preventDefault();
    this.props.clearEdfInfo()
    this.setState((state) => ({editMode: true}))
  }
  handleToggleEdit(e){
    e.preventDefault();
    const title = this.refs.title.textContent;
    const description = this.refs.description.textContent;
    if (this.state.editMode){
      if (this.props.edfInfo.id){
        this.props.updateEdf({id: this.props.edfInfo.id, title: title, description: description});
      }
      else{
        this.props.createAndAssignEdf({title: title, description: description});
      }
    }
    this.setState((state) => ({editMode: !state.editMode}))
  }

  render() {
    return (
      <div>
        <h3>Text Info</h3>
        <div>
          <p>Id: {this.props.edfInfo.id}</p>
          <p>Title</p>
          <p contentEditable={this.state.editMode} ref="title">
            {this.props.edfInfo.title}
          </p>
        </div>
        <div>
          <p>Description</p>
          <p contentEditable={this.state.editMode} ref="description">
            {this.props.edfInfo.description}</p>
        </div>
        <button onClick={this.handleToggleEdit}>Toggle Edit</button>
        <button onClick={this.handleCreateNewEdf}>Start New Edf Entry</button>
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof EdfViewer
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
 * @memberof EdfViewer
 * @private
 */
const mapDispatchToProps = dispatch => ({
  updateEdf: (info) => (
    dispatch(actions.updateEdf(info))
  ),
  clearEdfInfo: () => (
    dispatch(actions.clearEdfInfo())
  ),
  createAndAssignEdf: (info) => (
    dispatch(actions.createAndAssignEdf(info))
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfViewer);

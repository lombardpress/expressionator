import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class EdfCreation extends Component {
  constructor(props) {
    super(props);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleAddNewEdf = this.handleAddNewEdf.bind(this);
  }
  componentDidMount() {

  }
  handleAddNewEdf() {
    this.props.clearEdfInfo()
  }
  handleFormUpdate(e) {
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    const authorTitle = "unassigned"
    if (this.props.edfInfo.id) {
      console.log("TEST")
      this.props.updateEdf({id: this.props.edfInfo.id, title: title, description: description});
    } else {
      this.props.createAndAssignEdf({title: title, description: description});
    }
  }
  render() {

    return (
      <div className="data-creation-form">
        <h3>Text Info</h3>
        <form ref="form" onSubmit={this.handleFormUpdate}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={this.props.edfInfo.title}
            key={this.props.edfInfo.id}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            defaultValue={this.props.edfInfo.description}
            key={"desc" + this.props.edfInfo.id}
          />
          <input type="submit"></input>
        </form>
        <button onClick={this.handleAddNewEdf}>Add New EDF</button>
      </div>
    );
  }
}


/**
 * mapStateToProps - to hook up connect
 * @memberof DataInput
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    view: state.view

  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof DataInput
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignEdf: (info) => (
    dispatch(actions.assignEdf(info))
  ),
  createEdf: (info) => (
    dispatch(actions.createEdf())
  ),
  createAndAssignEdf: (info) => (
    dispatch(actions.createAndAssignEdf(info))
  ),
  clearEdfInfo: () => (
    dispatch(actions.clearEdfInfo())
  ),
  updateEdf: (info) => (
    dispatch(actions.updateEdf(info))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfCreation);

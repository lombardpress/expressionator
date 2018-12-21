import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";

class ItemCreation extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
  }
  componentDidMount() { }

  handleAddNewItem(e) {
    e.preventDefault();
    const title = this.refs.form.title.value;
    const questionTitle = this.refs.form.questionTitle.value;
    if (!this.props.edfInfo.id){
      alert("focused edf is not set")
    }
    else{
    this.props.createItem(this.props.edfInfo.id, {title: title, questionTitle: questionTitle});
    //clears form after submission; not sure this is the correct react way to do this.
    this.refs.form.title.value = "";
    this.refs.form.questionTitle.value = "";
    }

  }
  render() {
    return (
      <div className="data-creation-form">
        <h3>Add New Item</h3>
        <form ref="form" onSubmit={this.handleAddNewItem}>
          <label>Title</label>
          <input
            type="text"
            name="title"
          />
          <label>Quesiton Title</label>
          <input
            type="text"
            name="questionTitle"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof ItemCreation
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
 * @memberof ItemCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({
  createItem: (edfId, info) =>
    dispatch(actions.createItem(edfId, info))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCreation);

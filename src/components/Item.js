import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';




class Item extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.state = {
      editMode: false,
    }
  }
  handleToggleEdit(e){
    e.preventDefault();
    const title = this.refs.title.textContent;
    const questionTitle = this.refs.questionTitle.textContent;
    if (this.state.editMode){
      if (this.props.id){
        this.props.updateItem({edfId: this.props.edfId, id: this.props.id, title: title, questionTitle: questionTitle})
        console.log("test", title, questionTitle)

      }
      else{
        // this would need the edf id
        //this.props.createItem({title: title, questionTitle: questionTitle});
        alert("create", title, questionTitle)
      }
    }
    this.setState((state) => ({editMode: !state.editMode}))
  }

  render() {
    return (
      <div className={this.props.status}>
        <p>{this.props.id}</p>
        <p contentEditable={this.state.editMode} ref="title">{this.props.title}</p>
        <p contentEditable={this.state.editMode} ref="questionTitle">{this.props.questionTitle}</p>
        <button onClick={this.handleToggleEdit}>Toggle Edit</button>
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof Item
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
 * @memberof Item
 * @private
 */
const mapDispatchToProps = dispatch => ({
  updateItem: (info) => (
    dispatch(actions.updateItem(info))
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);

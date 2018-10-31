import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class EdfCreation extends Component {
  constructor(props) {
    super(props);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
  componentDidMount(){

  }
  handleFormUpdate(e){
    e.preventDefault();
    const title = this.refs.form.title.value;
    const author = this.refs.form.author.value;
    const description = this.refs.form.description.value;
    this.props.updateEdf({"title": title, "author": author, "description": description});
  }
  render() {
    function displayAuthors(props){

      const displayAuthors = props.personsInfo.map((author) =>{
          return(
            <option value={author.authorShortId.value} key={author.authorShortId.value}>{author.authorTitle.value}</option>
          )
      });
      // add newly created person record to list of names
      displayAuthors.push(<option value={props.personInfo.title} key="new">{props.personInfo.title}</option>)
      return displayAuthors
    }
    return (
      <div className="data-creation-form">
        <form ref="form" onSubmit={this.handleFormUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Author</label>
          <div>{!this.props.personsInfo ? <input type="text" name="author" placeholder="author"></input> : <select name="author">{displayAuthors(this.props)}</select>}</div>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
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
  updateEdf: (info) => (
    dispatch(actions.updateEdf(info))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfCreation);

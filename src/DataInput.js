import React, { Component } from 'react';


class DataInput extends Component {
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
    this.props.handleFormUpdate({"title": title, "author": author, "description": description});
  }


  render() {
    function displayAuthors(authors){

      const displayAuthors = authors.map((author) =>{
          return(
            <option value={author.authorShortId.value} key={author.authorShortId.value}>{author.authorTitle.value}</option>
          )
      });
      displayAuthors.push(<option value="new" key="new">New author, waiting for approval</option>)
      return displayAuthors
    }
    return (
      <div className="data-creation-form">
        <form ref="form" onSubmit={this.handleFormUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Author</label>
          <div>{!this.props.personList ? <input type="text" name="author" placeholder="author"></input> : <select name="author">{displayAuthors(this.props.personList)}</select>}</div>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default DataInput;

import React, { Component } from 'react';

class DataInput extends Component {
  constructor(props) {
    super(props);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
  handleFormUpdate(e){
    e.preventDefault();
    const title = this.refs.form.title.value;
    const author = this.refs.form.author.value;
    const description = this.refs.form.description.value;
    this.props.handleFormUpdate({"title": title, "author": author, "description": description});
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleFormUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Author</label>
          <input type="text" name="author" placeholder="author"></input>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default DataInput;

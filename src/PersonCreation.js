import React, { Component } from 'react';

class PersonCreation extends Component {
  constructor(props) {
    super(props);
    this.handlePersonUpdate = this.handlePersonUpdate.bind(this);
    this.state = {

    }
  }
  componentDidMount(){

  }
  handlePersonUpdate(e){
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    this.props.handlePersonUpdate({"title": title, "description": description});
  }
  render() {
    return (
      <div className="data-creation-form">
        <form ref="form" onSubmit={this.handlePersonUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

  export default PersonCreation;

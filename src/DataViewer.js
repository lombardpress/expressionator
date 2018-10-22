import React, { Component } from 'react';

class DataViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Title {this.props.info.title}</p>
        <p>Author {this.props.info.author}</p>
        <p>Description {this.props.info.description}</p>
      </div>
    );
  }
}

export default DataViewer;

import React, { Component } from 'react';

class DataViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {





    return (
      <div className="data-viewer">
        <div>
          <h3>Text Info</h3>
          <p>Title {this.props.info.edfInfo.title}</p>
          <p>Author {this.props.info.edfInfo.author}</p>
          <p>Description {this.props.info.edfInfo.description}</p>
        </div>
        <div>
          <h3>Person Info</h3>
          <p>Author {this.props.info.personInfo.title}</p>
          <p>Description {this.props.info.personInfo.description}</p>
        </div>
    </div>
    );
  }
}

export default DataViewer;

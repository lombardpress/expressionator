import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import WitnessView from './WitnessView.js';

class DataViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {





    return (
      <div className="data-viewer">
        <div>
          <h3>Text Info</h3>
          <p>Title {this.props.edfInfo.title}</p>
          <p>Author {this.props.edfInfo.author}</p>
          <p>Description {this.props.edfInfo.description}</p>
        </div>
        <div>
          <h3>Person Info</h3>
          <p>Author {this.props.personInfo.title}</p>
          <p>Description {this.props.personInfo.description}</p>
        </div>
        <div>
          <h3>Witness Info</h3>
          <WitnessView/>
        </div>
    </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof DataViewer
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
 * @memberof DataViewer
 * @private
 */
const mapDispatchToProps = dispatch => ({
//   fetchManifest: manifestUrl => (
//     dispatch(actions.fetchManifest(manifestUrl))
//   ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataViewer);

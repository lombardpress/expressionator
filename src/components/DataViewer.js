import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import WitnessesView from './WitnessesView.js';

class DataViewer extends Component {

  render() {
    const displayTextInfo = (targetEdf, edfList) => {
      const edf = edfList.find((edf) => edf.id === targetEdf.id)

      let questionTitles = []
      if (edf){
        if (edf.items){
           questionTitles = edf.items.map((item) => {
             const title = item.itemTitle.value
             const questionTitle = item.questionTitle ? item.questionTitle.value : ""
            return (
              <p>{title}: {questionTitle}</p>
            )
          });
        }
      }
      return (
        <div>
          <h3>Text Info</h3>
          <p>Title {targetEdf.title}</p>
          <p>Description {targetEdf.description}</p>
          {questionTitles}
        </div>
      )

    }
    return (
      <div className="data-view">
        {displayTextInfo(this.props.edfInfo, this.props.edfListInfo)}
        <div>
          <h3>Person Info</h3>
          <p>Author {this.props.personInfo.title}</p>
          <p>Description {this.props.personInfo.description}</p>
        </div>
        <div>
          <h3>Witness Info</h3>
          <WitnessesView />
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
    edfListInfo: state.edfListInfo,
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

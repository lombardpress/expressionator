import React, { Component } from 'react';
import fileDownload from 'js-file-download';
import { connect } from 'react-redux';
import { actions } from '../store';
import { exportToXml } from "../exportToXml";
import { exportToCdf } from "../exportToCdf";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleDownloadOnclick = this.handleDownloadOnclick.bind(this);
    this.handleDownloadCdfs = this.handleDownloadCdfs.bind(this);
  }
  handleDownloadOnclick(){
    const data = exportToXml(this.props)
    fileDownload(data, this.props.edfInfo.id +'.xml');
    window.location.href = "data:application/xml;charset=utf-8," + encodeURI(data)
  }
  handleDownloadCdfs(){
    this.props.witnessesInfo.forEach((w) => {
      if (w.proposedChange || w.status === 'provisional'){
        const data = exportToCdf(w)
        fileDownload(data, w.id +'.xml');
        window.location.href = "data:application/xml;charset=utf-8," + encodeURI(data)
      }
    })

  }
  render() {
    return (
      <div className="navbar">
        <a onClick={this.handleDownloadOnclick}>Export Edf v. 0.0.0</a> |
        <a onClick={this.handleDownloadCdfs}>Export Cdf(s) v. 0.0.0</a>
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof NavBar
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    edfListInfo: state.edfListInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessInfo: state.witnessInfo,
    witnessesInfo: state.witnessesInfo,
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof NavBar
 * @private
 */
const mapDispatchToProps = dispatch => ({
  changeDataCreationView: (view) => (
    dispatch(actions.changeDataCreationView(view))
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);

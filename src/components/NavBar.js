import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import { exportToXml } from "../exportToXml";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.packageData = this.packageData.bind(this);
    this.downloadTitle = this.downloadTitle.bind(this);
  }

  packageData(){
    const data = exportToXml(this.props)
    const dataLink = "data:application/xml;charset=utf-8," + encodeURI(data)
    return dataLink
  }
  downloadTitle(){
    const title = this.props.edfInfo.id
    return title
  }
  render() {
    return (
      <div className="navbar">
        <a href={this.packageData()} download={this.downloadTitle()}>Export Edf v. 0.0.0</a>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class EdfListItem extends Component {
  constructor(props) {
    super(props);
    this.handleEdfSelect = this.handleEdfSelect.bind(this);
  }
  handleEdfSelect(e) {
    e.preventDefault();
    const info = {
      id: this.props.edfId,
      title: this.props.edfTitle,
      description: 'description'
    }
    this.props.assignEdf(info)
    if (!this.props.items){
      this.props.fetchEdfItems(this.props.edfId)
    }
    this.props.clearAssignedEdfManifestations(this.props.edfId)
    if (!this.props.manifestations){
      this.props.fetchEdfManifestations(this.props.edfId)
    }
    else{
      const edfObject = this.props.edfList.find((edf) => edf.id === this.props.edfId)
      this.props.assignManifestations(edfObject)
    }
    this.props.assignPerson({id: this.props.authorId, title: "title", description: 'description'})
  }
  render() {
    const displayProposedChange = (edf) => {
      if (edf.proposedChange){
        return(
          <div className="provisional">Proposed Change:
            <p>title {this.props.proposedChange.title}</p>
            <p>description {this.props.proposedChange.description} </p>
            </div>
        )
      }

    }
    return (
      <div>
      <p className={this.props.edfStatus} onClick={this.handleEdfSelect} ref="item" value={this.props.edfId} name={this.props.edfTitle} key={this.props.edfId}>
        {this.props.authorTitle + ' – ' + this.props.edfTitle}
      </p>
      {displayProposedChange(this.props)}
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
    witnessesInfo: state.witnessesInfo,
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof EdfListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignEdf: (info) => (
    dispatch(actions.assignEdf(info))
  ),
  fetchEdfItems: (expressionShortId) => (
    dispatch(actions.fetchEdfItems(expressionShortId))
  ),
  fetchEdfManifestations: (expressionShortId) => (
    dispatch(actions.fetchEdfManifestations(expressionShortId))
  ),
  clearAssignedEdfManifestations: (edfId) => (
    dispatch(actions.clearAssignedEdfManifestations(edfId))
  ),
  assignManifestations: (edfObject) => (
    dispatch(actions.assignManifestations(edfObject))
  ),
  assignPerson: (info) => (
    dispatch(actions.assignPerson(info))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfListItem);

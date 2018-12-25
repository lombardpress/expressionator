import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class WitnessesListItem extends Component {
  constructor(props) {
    super(props);
    this.handleWitnessSelect = this.handleWitnessSelect.bind(this);
  }
  handleWitnessSelect() {
    this.props.attachWitness(this.props.witness.id, this.props.witness.title, this.props.witness.description)
  }
  render() {
    const displayProposedChange = () => {
      if (this.props.witness.proposedChange){
        return(
          <div className="provisional">Proposed Change:
            <p>title {this.props.witness.proposedChange.title}</p>
            <p>description {this.props.witness.proposedChange.description} </p>
            </div>
        )
      }

    }
    return (
      <div>
      <p className={this.props.witnessStatus} onClick={this.handleWitnessSelect} ref="item" value={this.props.witness.id} name={this.props.witness.title} key={this.props.witness.id}>{this.props.witness.title}</p>
      {displayProposedChange()}
      </div>

    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof PersonsListItem
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessInfo: state.witnessInfo,
    witnessesInfo: state.witnessesInfo,
    view: state.view,
    manifest: state.manifest
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof PersonsListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  attachWitness: (name, description) => (
    dispatch(actions.attachWitness(name, description))
  ),
  fetchManifest: (manifest) => (
    dispatch(actions.fetchManifest(manifest))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessesListItem);

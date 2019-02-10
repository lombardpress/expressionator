import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import WitnessesListItem from './WitnessesListItem.js';

import { InputGroup } from "@blueprintjs/core";

class WitnessesListViewer extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeSearchText = this.handleOnChangeSearchText.bind(this);
    this.state = {
      searchText: ""
    }
  }
  handleOnChangeSearchText(e){
    e.preventDefault();
    const searchText = e.target.value
    this.setState(() => ({searchText: searchText}))
  }
  render() {
    function displayWitnesses(props, searchText){

      const displayWitnesses = props.witnessesInfo.map((witness) =>{
        if (!searchText || witness.title.includes(searchText)){
          //temporary shortId get because codices are currently not listing shortId in SCTA rdf graph
          //const splitArray = witness.witness.value.split("/resource/")
          //const id = splitArray[splitArray.length - 1]
          return(
            <WitnessesListItem
              key={witness.id}
              witness={witness}
              />
          )
        }
      });
      return displayWitnesses
    }
    return (
      <div className="witnessesList">
          <InputGroup
              disabled={false}
              large={false}
              leftIcon="filter"
              onChange={this.handleOnChangeSearchText}
              placeholder="Filter Witnesses ..."
              small={true}
          />
        {displayWitnesses(this.props, this.state.searchText)}
      </div>

    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof WitnessesListViewer
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessesInfo: state.witnessesInfo,
    witnessInfo: state.witnessInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WitnessesListViewer
 * @private
 */
const mapDispatchToProps = dispatch => ({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessesListViewer);

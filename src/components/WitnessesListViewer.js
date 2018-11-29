import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import WitnessesListItem from './WitnessesListItem.js';

class WitnessesListViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function displayWitnesses(props){

      const displayWitnesses = props.witnessesInfo.map((witness) =>{
        
        //temporary shortId get because codices are currently not listing shortId in SCTA rdf graph
        //const splitArray = witness.witness.value.split("/resource/")
        //const id = splitArray[splitArray.length - 1]
          return(
            <WitnessesListItem key={witness.id} witnessId={witness.id} witnessTitle={witness.title} witnessStatus={witness.status} proposedChange={witness.proposedChange}/>
          )
      });
      return displayWitnesses
    }
    return (
      <div className="witnessesList">
        {displayWitnesses(this.props)}
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

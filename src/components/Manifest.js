import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import Canvas from './Canvas.js';

class Manifest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function displayCanvases(manifestid, manifests) {
      const manifest = manifests[manifestid];
      if (manifest){
        const canvases = manifest.sequences[0].canvases.map((canvas) => {
            return (
              <Canvas canvas={canvas}/>
            )
          });
        return canvases
      }
      else{
        return null
      }
    }
    function getFocusedWitness(witnesses, focusedWitnessId){
      if (focusedWitnessId){
        const witness = witnesses.find((wit) => wit.id === focusedWitnessId)
        try {
          return witness.manifest
        }
        catch{
          return null
        }
      }
      else {
        return null
      }
    }
    return (
      displayCanvases(getFocusedWitness(this.props.witnessesInfo, this.props.view.focusedWitness), this.props.manifests)
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof Manifest
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    edfListInfo: state.edfListInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    manifests: state.manifests,
    witnessesInfo: state.witnessesInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Manifest
 * @private
 */
const mapDispatchToProps = dispatch => ({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Manifest);

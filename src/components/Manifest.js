import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import Canvas from './Canvas.js';

class Manifest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function displayCanvases(manifestid, manifests, view) {
      const manifest = manifests[manifestid];
      const canvasid = view.canvasid
      if (manifest){
        if (canvasid){
          const canvas = manifest.sequences[0].canvases.find((canvas) => {
            if (canvas["@id"] === canvasid){
              return canvas
            }
          })
          const canvasIndex = manifest.sequences[0].canvases.findIndex((canvas, index) => {
            if (canvas["@id"] === canvasid){
              return index
            }
          })
          let canvasNext = ""
          let canvasPrevious = ""

          if (canvasIndex != manifest.sequences[0].canvases.length - 1){
            canvasNext = manifest.sequences[0].canvases[canvasIndex + 1]
          }
          else {
            canvasNext = undefined
          }
          if (canvasIndex != 0){
            canvasPrevious = manifest.sequences[0].canvases[canvasIndex - 1]
          }
          else {
            canvasPrevious = undefined
          }
          return <Canvas canvas={canvas} canvasNext={canvasNext} canvasPrevious={canvasPrevious}/>
        }
        else {
          const canvas = manifest.sequences[0].canvases[0]
          const canvasNext = manifest.sequences[0].canvases[1]
          const canvasPrevious = undefined
          return <Canvas canvas={canvas} canvasNext={canvasNext} canvasPrevious={canvasPrevious}/>
        }
        // const canvases = manifest.sequences[0].canvases.map((canvas, i) => {
        //   if (canvase["@id"] === canvasid){
        //     return (
        //       <Canvas canvas={canvas}/>
        //     )
        //   }
        //   else if (i === 0) {
        //     if {
        //       return (
        //         <Canvas canvas={canvas}
        //       )
        //   }
        //   });
        // return canvases

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
      displayCanvases(getFocusedWitness(this.props.witnessesInfo, this.props.view.focusedWitness), this.props.manifests, this.props.view)
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

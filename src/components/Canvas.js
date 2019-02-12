import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

import { Button } from "@blueprintjs/core";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this)
    this.handleItemAssociation = this.handleItemAssociation.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevoius = this.handlePrevious.bind(this)
    this.state = {
      width: "1000"
    }
  }
  handleOnMouseOver(){
    this.setState(() => ({width: "1000"}))
  }
  handleOnMouseOut(){
    this.setState(() => ({width: "1000"}))
  }
  handleItemAssociation(){
    const surfaceId = this.props.canvas["@id"]
    const witnessId = this.props.view.focusedWitness;
    const itemId = this.props.view.focusedItem;
    const edfId = this.props.edfInfo.id;

    this.props.associateSurface(surfaceId, witnessId, itemId, edfId);
  }
  handleNext(){
    this.props.selectCanvas(this.props.canvasNext["@id"]);
  }
  handlePrevious(){
    this.props.selectCanvas(this.props.canvasPrevious["@id"]);
  }

  render() {
    const displayImage = () => {
        return (
          <div onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut} >
            <div>
              <span>{this.props.canvas.label}</span>
              {this.props.view.focusedItem && <Button onClick={this.handleItemAssociation}>Add</Button>}
              {this.props.canvasNext && <Button onClick={this.handleNext}>Next</Button>}
              {this.props.canvasPrevious && <Button onClick={this.handlePrevious}>Previous</Button>}
            </div>
            <img src={this.props.canvas.images[0].resource.service["@id"] + "/full/" + this.state.width + ",/0/default.jpg"}/>
          </div>)
      }
    return (
      displayImage()
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof Canvas
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    edfListInfo: state.edfListInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    manifest: state.manifest,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Canvas
 * @private
 */
const mapDispatchToProps = dispatch => ({
  associateSurface: (surfaceId, witnessId, itemId, edfId) => (
    dispatch(actions.associateSurface(surfaceId, witnessId, itemId, edfId))
  ),
  selectCanvas: (canvasid) => (
    dispatch(actions.selectCanvas(canvasid))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Canvas);

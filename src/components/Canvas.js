import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this)
    this.handleItemAssociation = this.handleItemAssociation.bind(this)
    this.state = {
      width: 65
    }
  }
  handleOnMouseOver(){
    this.setState(() => ({width: 300}))
  }
  handleOnMouseOut(){
    this.setState(() => ({width: 65}))
  }
  handleItemAssociation(){
    const surfaceId = this.props.canvas["@id"]
    const witnessId = this.props.view.focusedWitness;
    const itemId = this.props.view.focusedItem;
    const edfId = this.props.edfInfo.id;

    this.props.associateSurface(surfaceId, witnessId, itemId, edfId);
  }
  render() {
    const displayImage= () => {
      if (this.props.view.focusedItem){
        return (<div onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut} onClick={this.handleItemAssociation}>
          <img src={this.props.canvas.images[0].resource.service["@id"] + "/full/" + this.state.width + ",/0/default.jpg"}/>
          <br/>
          <p>{this.props.canvas.label}</p>
        </div>)
      }
      else{
        return(
        <div onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut}>
          <img src={this.props.canvas.images[0].resource.service["@id"] + "/full/" + this.state.width + ",/0/default.jpg"}/>
          <br/>
          <p>{this.props.canvas.label}</p>
        </div>
      )
      }
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Canvas);

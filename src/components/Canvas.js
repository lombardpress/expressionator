import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this)
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
  render() {
    return (
      <div onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut}>
        <img src={this.props.canvas.images[0].resource.service["@id"] + "/full/" + this.state.width + ",/0/default.jpg"}/>
        <br/>
        <p>{this.props.canvas.label}</p>
      </div>
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

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Canvas);

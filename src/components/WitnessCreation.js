import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class WitnessCreation extends Component {
  constructor(props) {
    super(props);
    this.handlePersonUpdate = this.handlePersonUpdate.bind(this);
    this.state = {

    }
  }
  componentDidMount(){

  }
  handlePersonUpdate(e){
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    this.props.updateWitness(title, description);
  }
  render() {
    return (
      <div className="data-creation-form">
        <h3>Witness Info</h3>
        <form ref="form" onSubmit={this.handlePersonUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof WitnessCreation
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WitnessCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({
  updateWitness: (name, description) => (
    dispatch(actions.updateWitness(name, description))
  )
});
export default connect(
mapStateToProps,
mapDispatchToProps,
)(WitnessCreation);

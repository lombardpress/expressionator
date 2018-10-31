import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class PersonCreation extends Component {
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
    this.props.updatePerson(title, description);
  }
  render() {
    return (
      <div className="data-creation-form">
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
 * @memberof PersonCreation
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
 * @memberof PersonCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({
   updatePerson: (name, description) => (
     dispatch(actions.updatePerson(name, description))
   )
});
export default connect(
mapStateToProps,
mapDispatchToProps,
)(PersonCreation);

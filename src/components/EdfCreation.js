import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class EdfCreation extends Component {
  constructor(props) {
    super(props);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
  componentDidMount() {

  }
  handleFormUpdate(e) {
    e.preventDefault();
    const title = this.refs.form.title.value;
    const description = this.refs.form.description.value;
    this.props.assignEdf({ "title": title, "description": description });
  }
  render() {

    return (
      <div className="data-creation-form">
        <h3>Text Info</h3>
        <form ref="form" onSubmit={this.handleFormUpdate}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"></input>
          <label>Description</label>
          <input type="text" name="description" placeholder="description"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}


/**
 * mapStateToProps - to hook up connect
 * @memberof DataInput
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
 * @memberof DataInput
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignEdf: (info) => (
    dispatch(actions.assignEdf(info))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfCreation);

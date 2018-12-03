import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class EdfListItem extends Component {
  constructor(props) {
    super(props);
    this.handleEdfSelect = this.handleEdfSelect.bind(this);
  }
  handleEdfSelect() {
    const info = {
      title: this.props.edfTitle,
      description: 'description'
    }
    this.props.assignEdf(info)
    this.props.updatePerson(this.props.authorTitle, 'description')
  }
  render() {
    return (
      <p onClick={this.handleEdfSelect} ref="item" value={this.props.edfId} name={this.props.edfTitle} key={this.props.edfId}>
        {this.props.authorTitle + ' – ' + this.props.edfTitle}
      </p>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof NavBar
 * @private
 */
const mapStateToProps = state => (
  {

  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof EdfListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignEdf: (info) => (
    dispatch(actions.assignEdf(info))
  ),
  updatePerson: (title, description) => (
    dispatch(actions.updatePerson(title, description))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdfListItem);

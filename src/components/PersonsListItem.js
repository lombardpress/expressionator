import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class PersonsListItem extends Component {
  constructor(props) {
    super(props);
    this.handlePersonSelect = this.handlePersonSelect.bind(this);
  }
  handlePersonSelect(){
    this.props.assignPerson({ id: this.props.id, title: this.props.title, description: "description" })
  }
  render() {
    const displayProposedChange = (person) => {
      if (person.proposedChange){
        return(
          <div className="provisional">Proposed Change:
            <p>title {this.props.proposedChange.title}</p>
            <p>description {this.props.proposedChange.description} </p>
            </div>
        )
      }

    }
    return (
      <div>
      <p className={this.props.status} onClick={this.handlePersonSelect} ref="item" value={this.props.id} title={this.props.title} key={this.props.id}>{this.props.title}</p>
      {displayProposedChange(this.props)}
      </div>
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
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof PersonsListItem
 * @private
 */
const mapDispatchToProps = dispatch => ({
  assignPerson: (info) => (
    dispatch(actions.assignPerson(info))
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonsListItem);

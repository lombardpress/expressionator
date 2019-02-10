import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import PersonsListItem from './PersonsListItem.js';

import { InputGroup } from "@blueprintjs/core";

class PersonsListViewer extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeSearchText = this.handleOnChangeSearchText.bind(this);
    this.state = {
      searchText: ""
    }
  }
  handleOnChangeSearchText(e){
    e.preventDefault();
    const searchText = e.target.value
    this.setState(() => ({searchText: searchText}))
  }
  render() {
    function displayAuthors(props, searchText){
      const displayAuthors = props.personsInfo.map((author) =>{
        if (!searchText || author.title.includes(searchText)){
          return(
            <PersonsListItem
              key={author.id}
              id={author.id}
              title={author.title}
              status={author.status}
              proposedChange={author.proposedChange}
            />
          )
        }
      });
      return displayAuthors
    }
    return (
      <div className="personsList">
        <InputGroup
            disabled={false}
            large={false}
            leftIcon="filter"
            onChange={this.handleOnChangeSearchText}
            placeholder="Filter People ..."
            small={true}
        />
        {displayAuthors(this.props, this.state.searchText)}
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
 * @memberof NavBar
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
)(PersonsListViewer);

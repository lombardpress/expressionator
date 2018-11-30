import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import PersonsListItem from './PersonsListItem.js';

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
        if (!searchText || author.authorTitle.value.includes(searchText)){
          return(
            <PersonsListItem key={author.authorShortId.value} personId={author.authorShortId.value} personTitle={author.authorTitle.value}/>
          )
        }
      });
      return displayAuthors
    }
    return (
      <div className="personsList">
        <form onChange={this.handleOnChangeSearchText}>
          <p>Filter Names</p>
          <input type="text" />
        </form>
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

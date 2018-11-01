import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import PersonsListItem from './PersonsListItem.js';

class PersonsListViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function displayAuthors(props){

      const displayAuthors = props.personsInfo.map((author) =>{
          return(
            <PersonsListItem key={author.authorShortId.value} personId={author.authorShortId.value} personTitle={author.authorTitle.value}/>
          )
      });
      return displayAuthors
    }
    return (
      <div className="personsList">
        {displayAuthors(this.props)}
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

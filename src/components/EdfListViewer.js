import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import EdfListItem from './EdfListItem.js';

class EdfListViewer extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeSearchText = this.handleOnChangeSearchText.bind(this);
    this.state = {
      searchText: ""
    }
  }
  handleOnChangeSearchText(e) {
    e.preventDefault();
    const searchText = e.target.value
    this.setState(() => ({ searchText: searchText }))
  }
  render() {
    function displayEdfs(props, searchText) {
      const displayEdfs = props.edfListInfo.map((edf) => {
        if (!searchText
          || edf.title.toLowerCase().includes(searchText.toLowerCase())
          || edf.authorTitle.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return (
            <EdfListItem
              key={edf.id}
              authorTitle={edf.authorTitle}
              edfId={edf.id}
              edfTitle={edf.title}
              edfStatus={edf.status}
              proposedChange={edf.proposedChange}
              items={edf.items}
            />
          )
        }
      });
      return displayEdfs
    }
    return (
      <div className="edfsList">
        <form onChange={this.handleOnChangeSearchText}>
          <p>Filter Text Expression</p>
          <input type="text" />
        </form>
        {displayEdfs(this.props, this.state.searchText)}
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
    edfListInfo: state.edfListInfo,
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
)(EdfListViewer);

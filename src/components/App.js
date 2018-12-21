import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
//import EdfCreation from "./EdfCreation.js";
//import DataViewer from "./DataViewer.js";
//import PersonCreation from "./PersonCreation.js";
//import WitnessesCreation from "./WitnessesCreation.js";
import NavBar from "./NavBar.js";
import PersonsListViewer from "./PersonsListViewer.js";
import WitnessesListViewer from "./WitnessesListViewer.js";
import EdfListViewer from './EdfListViewer.js';
import WitnessesView from './WitnessesView.js';
import PersonViewer from './PersonViewer.js';
import EdfViewer from './EdfViewer.js';

import Axios from "axios";
import { actions } from "../store";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() { }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Data Creation App</p>
        </header>
        <NavBar />
        <div className="body-wrapper">
          <div className="data-lists">
            <PersonsListViewer />
            <WitnessesListViewer />
            <EdfListViewer />
          </div>
          <div className="creation-view">
            <div className="data-view">
              <EdfViewer/>
              <PersonViewer/>
              <WitnessesView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
const mapStateToProps = state => ({
  edfInfo: state.edfInfo,
  personsInfo: state.personsInfo,
  view: state.view
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */
const mapDispatchToProps = dispatch => ({
  fetchPersons: () => dispatch(actions.fetchPersons())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

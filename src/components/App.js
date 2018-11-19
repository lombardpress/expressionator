import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import EdfCreation from "./EdfCreation.js";
import DataViewer from "./DataViewer.js";
import PersonCreation from "./PersonCreation.js";
import WitnessesCreation from "./WitnessesCreation.js";
import NavBar from "./NavBar.js";
import PersonsListViewer from "./PersonsListViewer.js";
import WitnessesListViewer from "./WitnessesListViewer.js";
import Axios from "axios";
import { actions } from "../store";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const creationView = view => {
      if (view === "edfCreation") {
        return <EdfCreation />;
      } else if (view === "personCreation") {
        return <PersonCreation />;
      } else if (view === "witnessCreation") {
        return <WitnessesCreation />;
      } else {
        return <EdfCreation />;
      }
    };
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
          </div>
          <div className="creation-view">
            <div>{creationView(this.props.view.dataCreationView)}</div>
            <div>
              <DataViewer />
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

import React, { Component } from "react";
import { connect } from "react-redux";
//import logo from "./logo.svg";
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
import ItemsViewer from './ItemsViewer.js';
import Manifest from './Manifest';

import { Mosaic, MosaicWindow } from 'react-mosaic-component';

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import '../styles/Mosaic.css';


import Axios from "axios";
import { actions } from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    this.tileRenderer = this.tileRenderer.bind(this);
  }
  componentDidMount() { }
  /**
   * Render a tile (Window) in the Mosaic.
   */
   tileRenderer(id, path) {
     const titles = {
       a: "text list",
       b: "codex list",
       c: "person list",
       d: "focused text",
       e: "assigned author",
       f: "assigned witnesses",
       g: "assigned items",
       h: "folios"
     }
     const elements = {
       a: <EdfListViewer/>,
       b: <WitnessesListViewer/>,
       c: <PersonsListViewer/>,
       d: <div><EdfViewer/><PersonViewer/><WitnessesView /></div>,
       g: <ItemsViewer />,
       h: <Manifest />
     }
     const ViewIdMosaicWindow = MosaicWindow.ofType(id)
     return (
       <ViewIdMosaicWindow path={path} title={titles[id]}>
          {elements[id]}
       </ViewIdMosaicWindow>
      )
   }
   render(){
    const initialLayoutValue = {
      direction: 'row',
      first: {
        direction: 'row',
        first: "a",
        second: {
          direction: 'row',
            first: 'b',
            second: 'c',
          },
          splitPercentage: 33
        },
        second: {
        direction: 'row',
        first: "d",
        second: {
          direction: 'column',
          first: 'g',
          second: 'h',
        },
        splitPercentage: 50
      },
      splitPercentage: 50,
      currentTheme: 'mosaic-blueprint-theme'
    }
    return(
      <div>
        <header className="App-header">
          <p>Data Creation App</p>
        </header>
        <NavBar />
        <div id="app">
          <Mosaic
            renderTile={this.tileRenderer}
            initialValue={initialLayoutValue}
            zeroStateView={<div />}
          />
        </div>
        </div>

    )
  }

  // render() {
  //
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <p>Data Creation App Test</p>
  //       </header>
  //       <NavBar />
  //       <div className="body-wrapper">
  //         <div className="data-lists column">
  //           <PersonsListViewer />
  //           <WitnessesListViewer />
  //           <EdfListViewer />
  //         </div>
  //         <div className="column">
  //             <EdfViewer/>
  //             <PersonViewer/>
  //             <WitnessesView />
  //         </div>
  //         <div className="column">
  //           <ItemsViewer />
  //         </div>
  //         <div className="column">
  //           <Manifest />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
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

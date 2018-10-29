import React, { Component } from 'react';
import logo from './logo.svg';
import DataInput from './DataInput.js';
import DataViewer from './DataViewer.js';
import PersonCreation from './PersonCreation.js';
import NavBar from './NavBar.js';
import Axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "edfCreation",
      edfInfo: {},
      personInfo: {},
      fetching: false,
      personList: []
    };
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleViewSwitch = this.handleViewSwitch.bind(this);
    this.handlePersonUpdate = this.handlePersonUpdate.bind(this);
    this.getAuthorList = this.getAuthorList.bind(this);
  }

  handleFormUpdate(data){
    this.setState((state) => {
      return {
        edfInfo: data
      }

    });
  }
  handlePersonUpdate(data){
    this.setState((state) => {
      return {
        personInfo: data
      }

    });
  }
  handleViewSwitch(){
    this.setState((state) => {
      if (state.view === "personCreation"){
        return{
          view: "edfCreation"
        }
      }
      else{
        return{
          view: "personCreation"
        }
      }
    });
  }

  getAuthorList = () => {
    const sparqlEndpoint = "https://sparql-staging.scta.info/ds/query"
    const query = [
        "SELECT DISTINCT ?author ?authorTitle ?authorShortId ",
        "WHERE { ",
        "?author a <http://scta.info/resource/person> .",
        "?resource a <http://scta.info/resource/expression> .",
        "?resource <http://scta.info/property/level> '1' .",
        "?resource <http://www.loc.gov/loc.terms/relators/AUT> ?author .",
        "?author <http://scta.info/property/shortId> ?authorShortId .",
        "?author <http://purl.org/dc/elements/1.1/title> ?authorTitle .",
        "}",
        "ORDER BY ?authorTitle"].join('');

    this.setState((state)=>{
      return{
        fetching: true,
        personList: []
      }
    });
    const _this = this;
    Axios.get(sparqlEndpoint, {params: {"query" : query, "output": "json"}}).then(function(res){
      _this.setState((state)=>{
        return {
          fetching: false,
          personList: res.data.results.bindings
          }
        });
      });
  }

  componentDidMount(){

   //get author list
   this.getAuthorList();
   // try to load data from local storage
   try {
     const state = JSON.parse(localStorage.getItem("data-creation-state"));
     //only load state if state is not empty
     if (state){
         this.setState(() => (state));
       }
   }
   // if local storage fails do nothing and proceed with the default state
   catch (e) {

   }

 }
 componentDidUpdate(){
   localStorage.setItem("data-creation-state", JSON.stringify(this.state))
 }

  render() {
    console.log('state at render', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Data Creation App
          </p>
        </header>
        <NavBar handleViewSwitch={this.handleViewSwitch}/>
        {this.state.view === "edfCreation" ?
        <DataInput  handleFormUpdate={this.handleFormUpdate} personList={this.state.personList}/> :
        <PersonCreation handlePersonUpdate={this.handlePersonUpdate} />}
        <DataViewer info={this.state}/>
      </div>
    );
  }
}

export default App;

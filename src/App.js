import React, { Component } from 'react';
import logo from './logo.svg';
import DataInput from './DataInput.js';
import DataViewer from './DataViewer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }

  handleFormUpdate(data){
    this.setState(() => {
      return data
    });
  }

  componentDidMount(){

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
        <DataInput  handleFormUpdate={this.handleFormUpdate}/>
        <DataViewer info={this.state}/>
      </div>
    );
  }
}

export default App;

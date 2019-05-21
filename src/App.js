import React, { Component } from "react";
import Header from './containers/Header'
import AppWraper from './containers/AppWrapper'


import logo from "./logo.svg";



class App extends Component {
  render() {
   
    return (
      <div className="App"> 
        <AppWraper/>
      </div>
    );
  }
}

export default App;

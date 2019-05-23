import React, { Component } from "react";
import Header from './containers/Header'
import AppWraper from './containers/Navigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Raduim from 'radium'

library.add(faStroopwafel)
class App extends Component {
  render() {
   
    return (
      <div style={{ textAlign:"center"}}> 
        <AppWraper/>
      </div>
    );
  }
}

export default Raduim(App);

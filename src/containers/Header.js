import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  
    return (
      
      <div >
        <div >
          <div >
            <div >
            <a href="/"> <FontAwesomeIcon icon={faBars} size="3x" style={{color:"black"}}/></a>
            </div>
            <div >SMS Coding Challenge</div>
            <div >
             <a href="/form">  <FontAwesomeIcon icon={faUser} size="3x" style={{color:"black"}}/> </a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

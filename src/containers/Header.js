import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'antd'
import headerStyle from '../styles/header'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  
    return (

      <div style={{headerStyle}}> 
                <div  className="faBars">         
                      <a href="/"> <FontAwesomeIcon icon={faBars}  size="3x"   className="navItem"/></a>
                  </div>     
                  <div  className="title">
                  
                      <h4 style={{fontWeight: "bold"}}>SMS Coding Challenge</h4>
                   
                  </div>
                  <div className=" user_area">
                   
                      <a href="/form">  <FontAwesomeIcon icon={faUser} size="3x"  className="navItem"/> </a>      
                    </div>           
        
    </div>
    );
  }
}

export default Header;


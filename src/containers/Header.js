import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'antd'




class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  
    return (

      <div style={{width:"100%",height: "80px",display: "flex",backgrounColor:"red",padding: "20px",border: "1px solid #efeaea",marginBottom: "10px"}}> 
                <div style={{marginLeft:"20%"}}>         
                      <a href="/"> <FontAwesomeIcon icon={faBars}  size="3x"   className="navItem"/></a>
                  </div>     
                  <div   style={{marginLeft:"20%"}}>
                  
                      <h4 style={{fontWeight: "bold"}}>SMS Coding Challenge</h4>
                   
                  </div>
                  <div style={{marginLeft:"20%"}}>
                   
                      <a href="/form">  <FontAwesomeIcon icon={faUser} size="3x"  className="navItem"/> </a>      
                    </div>           
        
    </div>
    );
  }
}

export default Header;


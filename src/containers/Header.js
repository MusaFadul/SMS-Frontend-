import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'antd'
import Radium, { StyleRoot } from 'radium';




class Header extends Component {

  state = {
    mouseEnterFaBar : false,
    mouseEnterFaUser:false
  }
  
  render() {
    const {mouseEnterFaBar, mouseEnterFaUser} = this.state
      let styleColor1 = {color:""}
      let styleColor2 = {color:""}
    if(mouseEnterFaBar) {
      styleColor1 = {color:"red"}
    }
    if(mouseEnterFaUser) {
      styleColor2 = {color:"red"}
    }
    return (
      <StyleRoot>
        <div style={{width:"100%",height: "80px",display: "flex",backgrounColor:"red",padding: "20px",border: "1px solid #efeaea",marginBottom: "10px"}}> 
                  <div style={{marginLeft:"20%"}} onMouseEnter={()=>this.setState({mouseEnterFaBar:true})} onMouseLeave={()=>this.setState({mouseEnterFaBar : false})} >         
                        <a href="/"> <FontAwesomeIcon icon={faBars}  size="3x"   className="navItem" style={styleColor1}/></a>
                    </div>     
                    <div   style={{marginLeft:"20%"}}>
                    
                        <h4 style={{fontWeight: "bold"}}>SMS Coding Challenge</h4>
                    
                    </div>
                    <div style={{marginLeft:"20%"}}  onMouseEnter={()=>this.setState({mouseEnterFaUser:true})} onMouseLeave={()=>this.setState({mouseEnterFaUser : false})}>
                    
                        <a href="/form">  <FontAwesomeIcon icon={faUser} size="3x"  className="navItem" style={styleColor2}/> </a>      
                      </div>           
          
      </div>
    </StyleRoot>
    );
  }
}

export default Radium(Header);


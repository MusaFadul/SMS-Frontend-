import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'antd';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux'




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
        <div style={{width:"100%",height: "100px",display: "flex",backgrounColor:"red",padding: "20px",border: "1px solid #efeaea",marginBottom: "10px"}}> 
                  <div style={{marginLeft:"20%"}} onMouseEnter={()=>this.setState({mouseEnterFaBar:true})} onClick = {this.props.onSideDrawer}onMouseLeave={()=>this.setState({mouseEnterFaBar : false})} >         
                        <a> <FontAwesomeIcon icon={faBars}  size="3x"   className="navItem" style={styleColor1}/></a>
                    </div>     
                    <div   style={{marginLeft:"20%"}}>
                    
                        <h1 style={{fontWeight: "bold"}}>{this.props.applicationName}</h1>
                    
                    </div>
                    <div style={{marginLeft:"20%"}}  onMouseEnter={()=>this.setState({mouseEnterFaUser:true})} onClick = {this.props.onRegistration} onMouseLeave={()=>this.setState({mouseEnterFaUser : false})}>
                    
                        <a >  <FontAwesomeIcon icon={faUser} size="3x"  className="navItem" style={styleColor2}/> </a> 
                        <p> {this.props.userIcon} </p>     
                      </div>           
          
      </div>
    </StyleRoot>
    );
  }
}

const mapStateToProps = state => {
  return {
      userIcon : state.email,
      applicationName : state.applicationName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onRegistration : () => dispatch({type: 'REGISTRATION_FORM'}),
      onSideDrawer : () => dispatch({type: 'SIDEDRAWER'})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)( Header);


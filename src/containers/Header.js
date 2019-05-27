import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Row, Col , Tooltip } from 'antd';
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
          <Tooltip placement="bottom" title= " Show Side Drawer " style = {{backgroundColor : "red"}} arrowPointAtCenter>
            <div style={{marginLeft:"20%"}} onMouseEnter={()=>this.setState({mouseEnterFaBar:true})} onClick = {this.props.onSideDrawer}onMouseLeave={()=>this.setState({mouseEnterFaBar : false})} >         
              <a> <FontAwesomeIcon icon={faBars}  size="3x"   className="navItem" style={styleColor1}/></a>
            </div>  
          </Tooltip>   
          <div   style={{marginLeft:"20%"}}>    
            <h1 style={{fontWeight: "bold"}}>{this.props.applicationName}</h1> 
          </div>
          <Tooltip placement="bottom" title= " Go to Registration " style = {{backgroundColor : "red"}} arrowPointAtCenter>
            <div style={{marginLeft:"20%"}}  onMouseEnter={()=>this.setState({mouseEnterFaUser:true})} onClick = {this.props.onRegistration} onMouseLeave={()=>this.setState({mouseEnterFaUser : false})}>
              <a >  <FontAwesomeIcon icon={faUser} size="3x"  className="navItem" style={styleColor2}/> </a> 
              <p> {this.props.userIcon} </p>     
            </div>           
          </Tooltip>
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


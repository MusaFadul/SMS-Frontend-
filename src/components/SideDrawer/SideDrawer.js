import React, { Component } from "react";
import { connect } from 'react-redux'
import { Divider } from 'antd';
import SearchPanel from './Panels/Search/SearchPanel'
import DisplayPanel from './Panels/Display/DisplayPanel'
import SettingPanel from './Panels/Settings/SettingPanel'


class SideDrawer extends Component {

  
  render() { 
    return (
       this.props.showSideDrawer ? <div style={{backgroundColor: this.props.sideDrawerTheme, width:"24%", height:"100%",position:"fixed",boxSizing:"border-box",transition:"transform 0.3s ease-out", 
        zIndex:"200", left:"0", top:"0"}}>
            <h2 style={{marginTop:"2%"}}>{this.props.applicationName}</h2>
             <SearchPanel/>
             <Divider style={{marginTop:"12%"}}>Display</Divider>
             <DisplayPanel/>
             <Divider style={{marginTop:"2%"}}>Settings</Divider>
             <SettingPanel  style={{marginBottom:"0%"}}/>
        </div> : null
    );
  }
}

const mapStateToProps = state => {
  return {
    showSideDrawer : state.showSideDrawer,
    sideDrawerTheme : state.sideDrawerTheme,
    applicationName : state.applicationName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideBackdrop : () => dispatch({type: 'HIDEBACKDROP'}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);





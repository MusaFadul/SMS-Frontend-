import React, { Component } from 'react'
import { Row, Col, Slider, Tooltip, Select, Input, Button } from 'antd';
import RadioButton from '../RadioButton'
import ColorPicker from '../ColorPicker'
import { connect } from 'react-redux'
import Constant from '../../../../../store/constants'


const Option = Select.Option;


class ApplicationSettingTab extends React.Component {
 
    
    state = {
        newAppName : ""
    };
    
    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
     handleChange = (value) =>{
      console.log(`selected ${value}`);
    }

    onAppNameChanged = (event) =>{
        console.log(event.target.value);
        var newAppName = event.target.value
        console.log(newAppName + "777")
        this.props.onAppNameChanging(newAppName)
        this.setState({
         newAppName : newAppName
        })

        let appName = this.state.newAppName      
        if(appName.length<=2) {
           appName = "Coding Challenge"
            this.props.onAppNameChanged(appName)
        }
       
    }

    setAppName = () =>{
        const appName = this.state.newAppName  
        this.props.onAppNameChanged(appName)
      }



    render() {
        const {newAppName} = this.state
        return (
        <div style={{with:"100%", height:"150%"}} onClick={()=>this.setState({hideColorPicker:false})}>  
   
        <Row style={{marginTop:"6%"}}>
            <Col span={6}></Col>
            <Col span={10}><h4>Application Name</h4></Col>
        </Row>

        <Row style={{marginTop:"4%"}}>
            <Col span={1}></Col>
            <Tooltip placement="topLeft" title="Enter Application NAME"> <Col span={14}  style={{fontStyle:"normal"}}><Input placeholder = {this.props.applicationName} onChange={this.onAppNameChanged}/></Col></Tooltip>
            <Col  span={8}>
            <Button type="primary" size="default" style={{paddingLeft:"40px",paddingRight:"40px"}} onClick={this.setAppName}>Set</Button>
            </Col>
        </Row>
        <Row style={{marginTop:"6%"}}>
         <Col span={6} ></Col>
            <Col span={10}><h4>Application Theme</h4></Col>
        </Row>
        <Row style={{marginTop:"4%"}}>
         <Col span={6} ></Col>
            <Col span={6} >Light </Col>
            <Col span={6}>Dark</Col>
          
        </Row>
        <Row style={{marginTop:"2%"}}>
           
            <Col span={6}></Col>
            <Col span={6}><RadioButton checked = {this.props.lightTheme} name = { Constant.lightTheme} key = "1"/></Col>
            <Col span={6}><RadioButton checked = {this.props.darkTheme}  name = { Constant.darkTheme} key = "2"/></Col>
        </Row>
       
    </div>
        );
    }   
}

const mapStateToProps = state => {
    return {
        lightTheme : state.lightTheme,
        darkTheme : state.darkTheme,
        applicationName: state.applicationName
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
        onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
    };
  };

export default  connect(mapStateToProps, mapDispatchToProps)( ApplicationSettingTab) ;
import React, { Component } from 'react'
import { Row, Col, Radio, Slider, Tooltip, Select } from 'antd';
import ColorPicker from './ColorPicker'
import { connect } from 'react-redux'


const Option = Select.Option;


class RadioButton extends React.Component {
 
    
    state = {
      checked : this.props.enabled,
      name:this.props.name,
    };
    
    onChange = e => {
      const RadioButtonInfo =  this.props.name 
      console.log(RadioButtonInfo + " name " + this.props.checked + "  " + this.props.identifier)
    // this.props.onThemeChanged(RadioButtonInfo)
    };
    


      
        render() {
            const {checked , name} = this.state
            const ButInfo = { identifier : this.props.identifier, name : name ,checked : checked }
          return (
            <Radio onChange={()=>this.props.onThemeChanged(ButInfo)}  value={this.state.value} checked = {this.props.checked} />
          );
    }   
}
const mapStateToProps = state => {
    return {
        lightTheme : state.lightTheme,
        darkTheme : state.darkTheme
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onThemeChanged : (ButInfo) => dispatch({type: 'THEMECHANED' , payload : ButInfo}),
    };
  };

export default  connect(mapStateToProps, mapDispatchToProps) (RadioButton);
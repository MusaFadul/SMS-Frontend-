import React, { Component } from 'react'
import { Row, Col, Slider, Tooltip, Select } from 'antd';
import RadioButton from '../RadioButton'
import ColorPicker from '../ColorPicker'
import Constatnt from '../../../../../store/constants'
import { connect } from 'react-redux'
import constant from '../../../../../store/constants';


const Option = Select.Option;


class GridSettingTab extends React.Component {
 
    
    state = {
      hideColorPicker:false
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

    render() {
        return (
        <div style={{with:"100%", height:"150%"}} onClick={()=>this.setState({hideColorPicker:false})}>  
          <Row style={{marginTop:"5%"}}>
            <Col span={6}>Text Color</Col>
            <Col span={6}><ColorPicker display={this.state.hideColorPicker} /></Col>
        </Row>
        <Row style={{marginTop:"5%"}}>
            <Col span={6} >Background Color</Col>
           
            <Col span={6}><ColorPicker display={this.state.hideColorPicker} /></Col>
        </Row>       
        <Row style={{marginTop:"5%"}}>
            <Col span={6}>Text Size</Col>
            <Col span={6} >Large</Col>
            <Col span={6}>medium</Col>
            <Col span={6}>small</Col>
        </Row>
        <Row style={{marginTop:"1%"}}>
            <Col span={6}></Col>
            <Col span={6}><RadioButton  name = {Constatnt.textSizeLarge} identifier = {this.props.identifier} checked = {this.props.attributes.LargeTextSize} /></Col>
            <Col span={6}><RadioButton  name = {Constatnt.textSizeMedium} identifier = {this.props.identifier} checked = {this.props.attributes.mediumTextSize} /></Col>
            <Col span={6}><RadioButton  name = {Constatnt.textSizeSmall} identifier = {this.props.identifier}  checked = {this.props.attributes.smallTextSize} /></Col>
        </Row>
        <Row style={{marginTop:"4%"}}>
            <Col span={6}>Font Style</Col>
            <Col span={6}  style={{fontStyle:"normal"}}>normal</Col>
            <Col span={6} style={{fontStyle:"italic"}}>italic</Col>
            <Col span={6} style={{fontStyle:"oblique"}}>oblique</Col>
        </Row>
        <Row style={{marginTop:"1%"}}>
            <Col span={6}></Col>
            <Col span={6}><RadioButton  name = {Constatnt.fontStyleNormal} identifier = {this.props.identifier} checked = {this.props.attributes.normalFontStyle} /></Col>
            <Col span={6}><RadioButton  name = {Constatnt.fontStyleItalic} identifier = {this.props.identifier} checked = {this.props.attributes.italicFontStyle}/></Col>
            <Col span={6}><RadioButton  name = {Constatnt.fontStyleOblique} identifier = {this.props.identifier} checked = {this.props.attributes.obliqueFontStyle}/></Col>
        </Row>
    </div>
        );
    }   
}
const mapStateToProps = state => {
  return {
      lightTheme : state.lightTheme,
      darkTheme : state.darkTheme,
      applicationName: state.applicationName,
      LargeTextSize : state.largeTextSize,
      mediumTextSize : state.mediumTextSize,
      smallTextSize : state.smallTextSize,
      normalFontStyle: state.normalFontStyle,
      italicFontStyle :state.italicFontStyle,
      obliqueFontStyle :state.obliqueFontStyle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
      onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps) (GridSettingTab);
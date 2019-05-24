import React, { Component } from 'react'
import { Row, Col, Radio, Slider, Tooltip, Select } from 'antd';
import ColorPicker from './ColorPicker'


const Option = Select.Option;


class SettingPanel extends React.Component {
 
    
    state = {
      value: 1,
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
            <div style={{with:"24%", height:"24%"}}>  
            <p  style={{fontWeight: "bold"}}>Grid Header Settings</p>    
       <div>
            
    <Row>
      <Col span={6}>Text Size</Col>
      <Col span={6} >Large</Col>
      <Col span={6}>medium</Col>
      <Col span={6}>small</Col>
    </Row>
    <Row>
      <Col span={6}></Col>
      <Col span={6}><Radio/></Col>
      <Col span={6}><Radio/></Col>
      <Col span={6}><Radio/></Col>
    </Row>
    <Row style={{marginTop:"0%"}}>
      <Col span={6}>Font Style</Col>
      <Col span={6}  style={{fontStyle:"normal"}}>normal</Col>
      <Col span={6} style={{fontStyle:"italic"}}>italic</Col>
      <Col span={6} style={{fontStyle:"oblique"}}>oblique</Col>
    </Row>
    <Row>
      <Col span={6}></Col>
      <Col span={6}><Radio/></Col>
      <Col span={6}><Radio/></Col>
      <Col span={6}><Radio/></Col>
    </Row>

    <Row style={{marginTop:"0%"}}>
      <Col span={6} >Color</Col>
      <Col span={6}>Text Color</Col>
      <Col span={8}>Background Color</Col>
    </Row>

    <Row style={{marginTop:"0%"}}>
      <Col span={6} ></Col>
      <Col span={6}><ColorPicker/></Col>
      <Col span={8}><ColorPicker/></Col>
    </Row>

    </div>

    <p style={{marginTop : "5%" , fontWeight: "bold"}}>Grid Elements Settings</p> 
    <div>
            
            <Row>
              <Col span={6}>Text Size</Col>
              <Col span={6} >Large</Col>
              <Col span={6}>medium</Col>
              <Col span={6}>small</Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={6}><Radio/></Col>
              <Col span={6}><Radio/></Col>
              <Col span={6}><Radio/></Col>
            </Row>
            <Row style={{marginTop:"0%"}}>
              <Col span={6}>Font Style</Col>
              <Col span={6}  style={{fontStyle:"normal"}}>normal</Col>
              <Col span={6} style={{fontStyle:"italic"}}>italic</Col>
              <Col span={6} style={{fontStyle:"oblique"}}>oblique</Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={6}><Radio/></Col>
              <Col span={6}><Radio/></Col>
              <Col span={6}><Radio/></Col>
            </Row>
        
            <Row style={{marginTop:"0%"}}>
              <Col span={6} >Color</Col>
              <Col span={6}>Text Color</Col>
              <Col span={8}>Background Color</Col>
            </Row>
        
            <Row style={{marginTop:"0%"}}>
              <Col span={6} ></Col>
              <Col span={6}><ColorPicker/></Col>
              <Col span={8}><ColorPicker/></Col>
            </Row>
        
            </div>
   
            </div>
          );
    }   
}

export default SettingPanel;
import React, { Component } from 'react'
import { Row, Col, Radio, Slider, Tooltip, Select } from 'antd';
import CheckBox from './CHeckBox'

const Option = Select.Option;


class DisplayPanel extends React.Component {
 
    
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
            <div style={{ with:"24%", height:"24%"}}> 
            
             
            
            <Row style={{marginTop:"2%"}}>
              <Col span={6}> <CheckBox  name = "City"/></Col>
              <Col span={6} >City</Col>
              <Col span={6}><CheckBox  name = "Start Date"/></Col>
              <Col span={6} >Start Date</Col>
            </Row>
            <Row  style={{marginTop:"4%"}} >
            <Col span={6}> <CheckBox  name = "Color"/></Col>
              <Col span={6} >Color</Col>
              <Col span={6}><CheckBox  name = "End Date"/></Col>
              <Col span={6} >End Date</Col>
            </Row>
            <Row style={{marginTop:"4%"}}>
            <Col span={6}> <CheckBox  name = "Price"/></Col>
              <Col span={6} >Price</Col>
              <Col span={12}><Tooltip placement="topLeft" title="Filter By Price range" arrowPointAtCenter>
               <div style={{width:"90%"}}>
                <Slider range defaultValue={[20, 50]} disabled={false} />
               </div>  
             </Tooltip></Col>
           
            </Row>
            <Row style={{marginTop:"0%"}}>
            <Col span={6}> <CheckBox  name = "Status"/></Col>
              <Col span={6} >Status</Col>
              <Col span={12} ><Tooltip placement="topLeft" title="Filter By Status" arrowPointAtCenter>
              <Select defaultValue="Once" style={{ width: "90%" , marginTop :"2%" }} onChange={this.handleChange}>
                <Option value="Once">Once</Option>
                <Option value="Daily">Daily</Option>
                <Option value="WeekLy" >WeekLy</Option>
                <Option value="Monthly">Monthly</Option>
                <Option value="Often">Often</Option>
                <Option value="Seldom">Seldom</Option>
                <Option value="Yearly">Yearly</Option>
                <Option value="Never">Never</Option>
              </Select>
              </Tooltip></Col>
            
            </Row>

               
              
    </div>
          );
    }   
}

export default DisplayPanel;

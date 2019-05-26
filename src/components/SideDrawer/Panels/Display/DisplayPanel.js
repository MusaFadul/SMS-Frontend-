import React, { Component } from 'react'
import { Row, Col, Radio, Slider, Tooltip, Select } from 'antd';
import CheckBox from './CHeckBox'
import Constant from '../../../../store/constants'
import { connect } from 'react-redux'


const Option = Select.Option;


class DisplayPanel extends React.Component {
 
    
    state = {
      value: 1,
    };
    
    onChange = e => {
      this.setState({
        value: e.target.value,
      });
    };
     handleStatusChange = (status) =>{
      this.props.onStatusFilter(status)
    }

    handleSliderChange = value => {
      const priceRange = { minPrice : value[0], maxPrice : value[1]}
      this.props.onPriceRangeFilter(priceRange)
    };

    render() {
      const SelectStatus = !this.props.showStatusColumn
      return (
        <div style={{ with:"24%", height:"24%"}}> 
        <Row style={{marginTop:"2%"}}>
          <Col span={6}> <CheckBox  name = {Constant.cityCheckBox} checked = {this.props.showCityColumn} /></Col>
          <Col span={6} >City</Col>
          <Col span={6}><CheckBox  name =  {Constant.startdateCheckBox} checked = {this.props.showStartDateColumn}/></Col>
          <Col span={6} >Start Date</Col>
        </Row>
        <Row  style={{marginTop:"4%"}} >
          <Col span={6}> <CheckBox  name =  {Constant.colorCheckBox} checked = {this.props.ShowColorColumn}/></Col>
          <Col span={6} >Color</Col>
          <Col span={6}><CheckBox  name =  {Constant.endDateCheckBox} checked = {this.props.showEndDateColumn}/></Col>
          <Col span={6} >End Date</Col>
        </Row>
        <Row style={{marginTop:"4%"}}>
          <Col span={6}> <CheckBox  name =  {Constant.priceCheckBox} checked = {this.props.showPriceColumn}/></Col>
          <Col span={6} >Price</Col>
          <Col span={12}>
            <Tooltip placement="leftBottom" title= {this.props.showPriceColumn ?" Filter By Price Range" : "Please  Enable Price CheckBox"}arrowPointAtCenter>
              <div style={{width:"90%"}}>
                <Slider range defaultValue={[0, 100]} disabled={!this.props.showPriceColumn} onChange={this.handleSliderChange}/>
              </div>  
            </Tooltip></Col>
        
        </Row>
        <Row style={{marginTop:"0%"}}>
          <Col span={6}> <CheckBox  name =  {Constant.statusCheckBox} checked = {this.props.showStatusColumn} /></Col>
          <Col span={6} >Status</Col>
          <Col span={12} >
            <Tooltip placement="bottom" title= {this.props.showStatusColumn ?" Filter By Status" : "Please  Enable Status CheckBox "} arrowPointAtCenter>
              <Select defaultValue="Once" style={{ width: "90%" , marginTop :"2%" }} onChange={this.handleStatusChange} disabled = {SelectStatus}>
                <Option value="Once">Once</Option>
                <Option value="Daily">Daily</Option>
                <Option value="Weekly" >Weekly</Option>
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
  onPrcieRange = ()=>{
    let toolTip = "Filter By Price range"
    if(!this.props.showPriceColumn) {
        toolTip = "Please Enable Price"
    }
    return toolTip;
  }  
}

const mapStateToProps = state => {
  return {
    showCityColumn : state.showCityColumn,
    showPriceColumn : state.showPriceColumn,
    showStatusColumn : state.showStatusColumn,
    showStartDateColumn : state.showStartDateColumn,
    showEndDateColumn : state.showEndDateColumn,
    ShowColorColumn : state.ShowColorColumn
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onUnchecked : (checkBoxInfo) => dispatch({type: 'UNCHECKED', payload:checkBoxInfo}),
      onPriceRangeFilter : (priceRange) => dispatch({type: 'PRICETANGEFILTER', payload:priceRange}),
      onStatusFilter : (status) => dispatch({type: 'STATUSFILTER', payload:status}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (DisplayPanel);

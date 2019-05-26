import React, { Component } from "react";
import { List, Skeleton, Avatar, Alert } from 'antd';
import GridItem from './GridItem'
import dataSource from '../dataSource/data.json'
import { tsImportEqualsDeclaration } from "@babel/types";
import { connect } from 'react-redux'
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: false,
      loading: false,
    };
  }

  render() {
    
    const { initLoading, loadMore} = this.state
    let list = this.props.displayedList
    const  childStyleHeder = {padding:'33px',color:this.props.headerTextColor, fontSize :  this.props.headerTextSize ,  fontStyle : this.props.HeaderFontStyle }
    const  childStyleElement = {padding:'33px',color:this.props.elementTextColor, fontSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle}
   
    return (
      <div style={{width:"100% ",height: "100%"}}>
        <GridItem  gridHeader = "true" color = "color" 
        childStyle = {childStyleHeder} 
        backgroundColor = {this.props.headerBackgroundColor}
        city="City"
        start_date="start_date"
        end_date="end_date"
        price="price"
        status="status"/>
        {list.length === 0 ?  <Alert
        message="No Data"
        description=" Please Select Proper Date Range"
        type="warning"
        closable
        showIcon
        /> : null}
        <List
         loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (    
          <GridItem gridHeader="false"  childStyle = {childStyleElement} 
          textColor = {this.props.headerTextColor}
          backgroundColor = {this.props.elementBackgroundColor}
          textSize = {this.props.elementTextSize}
          textStyle = {this.props.elementFontStyle}
          city={item.city}
          start_date={item.start_date} 
          end_date={item.end_date} 
          price={item.price}
          status={item.status}    
          color={item.color}/>
        )}
      />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      headerTextSize : state.headerTextSize,
      HeaderFontStyle : state.HeaderFontStyle,
      elementTextSize : state.elementTextSize,
      elementFontStyle :state.elementFontStyle,
      headerTextColor : state.headerTextColor,
      headerBackgroundColor : state.headerBackgroundColor,
      elementTextColor:state.elementTextColor,
      elementBackgroundColor:state.elementBackgroundColor,
      displayedList : state.displayedList,
      dateRangeFilter : state.dateRangeFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
      onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps) (Grid);

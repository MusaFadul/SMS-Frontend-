import React, { Component } from "react";
import { List, Skeleton, Avatar, Alert } from 'antd';
import GridItem from './GridItem'
import dataSource from '../dataSource/data.json'
import { tsImportEqualsDeclaration } from "@babel/types";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: false,
      loading: false,
      list: ''
    };
  }

  async componentWillMount (){
    if(!this.props.filter) {
      this.setState({
        list:dataSource
      })
    }
  }

  onDataFilter (){
    var stDate = new Date(this.props.start_date);
    var edDate = new Date(this.props.end_date);
    //var edDate = new Date(this.state.list[1]).start_date;
    const filterdList = []
   for(let singleItem of dataSource){
     const singleItemStDate = new Date(singleItem.start_date)
     const singleItemEdDate = new Date(singleItem.end_date)
     if( singleItemStDate.valueOf() >= stDate.valueOf() &&  singleItemEdDate.valueOf() <= edDate.valueOf()) {
      filterdList.push(singleItem)
     }
   }
   return filterdList;
  }

  render() {
    
    const {list, initLoading, loadMore} = this.state
    let dataList = list;
    if(this.props.filter){
     dataList = this.onDataFilter();
    }
   
    return (
      <div >
        <GridItem  gridHeader = "true" color = "color"
        city="City"
        start_date="start_date"
        end_date="end_date"
        price="price"
        status="status"/>
        {dataList.length === 0 ?  <Alert
        message="No Data"
        description=" Please Select Proper Date Range"
        type="warning"
        closable
        showIcon
        /> : null}
        <List
         loading={initLoading}
        itemLayout="horizontal"
        dataSource={dataList}
        renderItem={item => (    
          <GridItem gridHeader="false"
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

export default Grid;

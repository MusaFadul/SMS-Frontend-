import React, { Component } from "react";
import { List, Skeleton, Avatar } from 'antd';
import GridItem from './GridItem'
import dataSource from '../dataSource/data.json'
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: false,
      loading: true,
     data: [],
     list: dataSource
    };
  }

  

  render() {
    const {list, initLoading, loadMore} = this.state
    const gridItems = this.state.list.map(i=>{
      return (<GridItem gridHeader="false"
          city={i.city}
          start_date={i.start_date} 
          end_date={i.end_date} 
          price={i.price}
          status={i.status}    
          color={i.color}/>)
    })
    return (
      <div >
        <GridItem  gridHeader = "true" color = "color"
        city="City"
        start_date="start_date"
        end_date="end_date"
        price="price"
        status="status"/>
        <List
         loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
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

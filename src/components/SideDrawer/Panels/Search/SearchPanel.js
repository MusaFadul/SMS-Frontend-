import React, { Component } from 'react'
import {Icon ,Input} from 'antd'
class  FilteredList extends Component {
   
  
    render (){
      return (
        
        <div style={{margin:"5%" ,with:"24%"}}>
            
              <Input  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Search by City or Color"/> 
              
            </div>
          ); 
    }
  
}
  
  export default FilteredList;
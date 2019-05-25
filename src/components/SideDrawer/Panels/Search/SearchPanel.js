import React, { Component } from 'react'
import {Icon ,Input} from 'antd'
const Search = Input.Search;
class  FilteredList extends Component {
   
  
    render (){
      return (
        
        <div style={{margin:"5%" ,with:"24%"}}>
            
            <Search placeholder="Search by City Name " onSearch={value => console.log(value)} enterButton />
              
            </div>
          ); 
    }
  
}
  
  export default FilteredList;
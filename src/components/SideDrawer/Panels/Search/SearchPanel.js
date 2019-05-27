import React, { Component } from 'react'
import { Input, Tooltip} from 'antd'
import { connect } from 'react-redux'

const Search = Input.Search;

class  SearchPanel extends Component {
   
  render (){
    return (
      <div style={{margin:"5%" ,with:"24%"}}>  
        <Tooltip placement="bottom" title= " Enter City Name " style = {{backgroundColor : "red"}} arrowPointAtCenter>
          <Search placeholder="Search by City Name "
            onSearch={cityName => this.props.onCityNameFilter(cityName)} 
            enterButton /> 
        </Tooltip> 
      </div>
   ); 
  } 
}


const mapDispatchToProps = dispatch => {
  return {
    onCityNameFilter : (cityName) => dispatch({type: 'CITYNAMEFILTER', payload: cityName}),
  };
};

export default  connect(null, mapDispatchToProps) (SearchPanel);
import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { connect } from 'react-redux'

class DisplayElement extends React.Component {
 
    state = {
        name : this.props.name
    }

onChange =(e)=> {
  console.log(this.state.name);
  const checkBoxInfo = { checked : e.target.checked , name : this.state.name}
  this.props.onUnchecked(checkBoxInfo)
}


        render() {
          
          return (
            <div style={{with:"20%", height:"15%"}}>                 
               
               <Checkbox onChange={this.onChange} checked={this.props.checked}></Checkbox>
               
            </div>
          );
    }   
}

const mapStateToProps = state => {
    return {
        checked : state.checked
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUnchecked : (checkBoxInfo) => dispatch({type: 'UNCHECKED', payload:checkBoxInfo}),
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (DisplayElement);
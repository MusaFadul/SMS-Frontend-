import React from 'react'
import { Checkbox, Tooltip} from 'antd';
import { connect } from 'react-redux'

class Checkbox_ extends React.Component {
 
  state = {
    name : this.props.name
  }

onChange =(e)=> {
  const checkBoxInfo = { checked : e.target.checked , name : this.state.name}
  this.props.onUnchecked(checkBoxInfo)
}

  render() {
    const toolTip = "Toggle " + this.props.name
    return (
      <div style={{with:"20%", height:"15%"}}>                 
        <Tooltip placement="topLeft" title= { toolTip} arrowPointAtCenter>
          <Checkbox onChange={this.onChange} checked={this.props.checked}></Checkbox>
        </Tooltip> 
      </div>
    );
  }   
}
 
const mapDispatchToProps = dispatch => {
  return {
     onUnchecked : (checkBoxInfo) => dispatch({type: 'UNCHECKED', payload:checkBoxInfo}),
  }
}
  
export default connect(null, mapDispatchToProps) (Checkbox_);
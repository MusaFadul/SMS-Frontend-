import React, { Component } from "react";
import { connect } from 'react-redux'

class BackDrop extends Component {

  render() { 
    return (
      this.props.show ? <div style={{ marginLeft:'0%',width:"100%", height:"100%",position:"fixed",
      zIndex:"100", left:"0", top:"0"}} onClick={this.props.onHideBackdrop}></div> : null
    );
  }
}

const mapStateToProps = state => {
  return {
    show : state.showBackdrop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideBackdrop : () => dispatch({type: 'HIDEBACKDROP'}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);





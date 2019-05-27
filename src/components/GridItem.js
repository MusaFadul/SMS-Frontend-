import React , { Component } from "react";
import { Row, Col } from 'antd';
import { connect } from 'react-redux'

class GridItem extends Component {

  state = {
    headerFontSize : this.props.headerTextSize,
    headerFontStyle : this.props.headerFontStyle,
    elementFontSize : this.props.elementTextSize,
    elementFontStyle : this.props.elementFontStyle,
  }

  render() {
    const style = this.onSetStyle().style
    const childStyle = this.props.childStyle
    const span = "3"
    return ( 
      <div style={{width:"80%",height:"80px", marginLeft:"18%", marginTop:"0.1%"}}>
        <Row type="flex">
          {this.props.showCityColumn ? <Col span = {span}  style={style} >
                <p style={childStyle}> {this.props.city}</p>
          </Col> : null}
          { this.props.showStartDateColumn ? <Col span = {span} style={style} >
            <p style={childStyle}>{this.props.start_date}</p>
          </Col> : null}
          {this.props.showEndDateColumn ? <Col className="gutter-row" span = {span} style={style}>
              <p style={childStyle}> {this.props.end_date}</p>
          </Col> : null}
          {this.props.showPriceColumn ? <Col span = {span} style={style}>
                <p style={childStyle}> {this.props.price}</p>
          </Col> : null}
          {this.props.showStatusColumn ? <Col span = {span} style={style} >
            <p style={childStyle}> {this.props.status}</p>
          </Col> : null}
          {this.props.ShowColorColumn ? <Col span = {span} style={style} >
              <p style={childStyle}>{this.props.color}</p>
          </Col>  : null}      
        </Row>
      </div>
    );
  }

  onSetStyle = () => { 
    const color = this.props.color
    const headerBackgroundColor = this.props.backgroundColor
     let style = {
      backgroundColor : headerBackgroundColor ,  height:"80px",textAlign:'center',marginRight:"0.1%", textSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle
    }
    let childStyle = null
    if(this.props.gridHeader === "true" && this.props.textColor){
      const fontSize = this.props.headerFontSize
      const fontStyle = this.props.headerFontStyle
      style = {
        backgroundColor : "red",height:"80px",textAlign:'center',marginRight:"0.1%", textSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle
      }
      childStyle = {padding:'33px',color:"red", fontSize : fontSize, fontStyle : fontSize}
      
    }
    if(this.props.gridHeader === "false" && this.props.backgroundColor === true){
      style = { backgroundColor : this.props.backgroundColor,height:"80px",textAlign:'center',marginRight:"0.1%"}
      childStyle = {padding:'33px',color:"white", fontSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle}
         
    }
    if(this.props.gridHeader === "false" && this.props.backgroundColor === "default"){
      style = { backgroundColor : color,height:"80px",textAlign:'center',marginRight:"0.1%"}
      childStyle = {padding:'33px',color:"white", fontSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle}
    }       
    var styleModel = {style : style , childStyle : childStyle  } 
    return styleModel
  }
}


const mapStateToProps = state => {
  return {
    headerTextSize : state.headerTextSize,
    HeaderFontStyle : state.HeaderFontStyle,
    elementTextSize : state.elementTextSize,
    elementFontStyle :state.elementFontStyle,
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
    onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
    onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps) (GridItem);
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
    const colorColumnStyle = this.onSetStyle().colorColumnStyle
 
 
     const span = "3"
 
     return ( 
         <div style={{width:"80%",height:"80px", marginLeft:"18%", marginTop:"0.1%"}}>
             <Row type="flex">
             <Col span = {span}  style={style} >
                  <p style={childStyle}> {this.props.city}</p>
             </Col>
             <Col span = {span} style={style} >
              <p style={childStyle}>{this.props.start_date}</p>
             </Col>
             <Col className="gutter-row" span = {span} style={style}>
               <p style={childStyle}> {this.props.end_date}</p>
             </Col>
             <Col span = {span} style={style}>
                 <p style={childStyle}> {this.props.price}</p>
             </Col>
             <Col span = {span} style={style} >
             <p style={childStyle}> {this.props.status}</p>
             </Col>
             <Col span = {span} style={style} >
               <p style={childStyle}>{this.props.color}</p>
             </Col>        
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
     let colorColumnStyle = {backgroundColor:'green',height:"80px",textAlign:'center',marginRight:"0.1%"}
    
     if(this.props.gridHeader === "true" && this.props.textColor){
       const fontSize = this.props.headerFontSize
       const fontStyle = this.props.headerFontStyle
       style = {
        backgroundColor : "red",height:"80px",textAlign:'center',marginRight:"0.1%", textSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle
    }
      console.log(this.props.headerTextSize + '  header true  66666666'  + "15px"+ this.props.headerTextSize)
          colorColumnStyle = style; 
          childStyle = {padding:'33px',color:"red", fontSize : fontSize, fontStyle : fontSize}
      
     }
     if(this.props.gridHeader === "false" && this.props.backgroundColor === true){
      //console.log(this.props.elementTextSize + '55555' + this.props.elementFontStyle)
         style = { backgroundColor : this.props.backgroundColor,height:"80px",textAlign:'center',marginRight:"0.1%"}
         colorColumnStyle = {backgroundColor:color,height:"80px",textAlign:'center',marginRight:"0.1%"}
         childStyle = {padding:'33px',color:"white", fontSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle}
         
       }

       if(this.props.gridHeader === "false" && this.props.backgroundColor === "default"){
        //console.log(this.props.elementTextSize + '55555' + this.props.elementFontStyle)
           style = { backgroundColor : color,height:"80px",textAlign:'center',marginRight:"0.1%"}
           colorColumnStyle = {backgroundColor:color,height:"80px",textAlign:'center',marginRight:"0.1%"}
           childStyle = {padding:'33px',color:"white", fontSize : this.props.elementTextSize, fontStyle : this.props.elementFontStyle}
           
         }

       var styleModel = {style : style , childStyle : childStyle , colorColumnStyle : colorColumnStyle } 

       return styleModel
  }
}


const mapStateToProps = state => {
  return {
      headerTextSize : state.headerTextSize,
      HeaderFontStyle : state.HeaderFontStyle,
      elementTextSize : state.elementTextSize,
      elementFontStyle :state.elementFontStyle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
      onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps) (GridItem);
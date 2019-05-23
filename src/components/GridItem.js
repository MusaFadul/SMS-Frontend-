import React  from "react";
import { Row, Col } from 'antd';

const gridItem = (props)=>{
   const color = props.color
    let style = {
        backgroundColor : "#00a0e9",height:"80px",textAlign:'center',marginRight:"0.1%"
    }
    const childStyle = {padding:'33px',color:"white"}
    let colorColumnStyle = {backgroundColor:'green',height:"80px",textAlign:'center',marginRight:"0.1%"}
   // let colorColumn = null
    if(props.gridHeader == "true"&props.color == "color"){
      colorColumnStyle = style; 
     // colorColumn = <p style={childStyle}>{props.color}</p> 
    }
    if(props.gridHeader == "false"){
        style = { backgroundColor : color,height:"80px",textAlign:'center',marginRight:"0.1%"}
        colorColumnStyle = {backgroundColor:color,height:"80px",textAlign:'center',marginRight:"0.1%"}
        //colorColumn =null
      }


    const span = "3"

    return ( 
        <div style={{width:"80%",height:"80px", marginLeft:"18%", marginTop:"0.1%"}}>
            <Row type="flex">
            <Col span = {span}  style={style} >
                 <p style={childStyle}> {props.city}</p>
            </Col>
            <Col span = {span} style={style} >
             <p style={childStyle}>{props.start_date}</p>
            </Col>
            <Col className="gutter-row" span = {span} style={style}>
              <p style={childStyle}> {props.end_date}</p>
            </Col>
            <Col span = {span} style={style}>
                <p style={childStyle}> {props.price}</p>
            </Col>
            <Col span = {span} style={style} >
            <p style={childStyle}> {props.status}</p>
            </Col>
            <Col span = {span} style={colorColumnStyle} >
              <p style={childStyle}>{props.color}</p>
            </Col>        
            </Row>
      </div>
    );
}

export default gridItem;
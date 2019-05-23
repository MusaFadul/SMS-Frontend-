import React, { Component } from "react";
import { DatePicker, Button, Alert, message,Layout } from 'antd';
import moment from 'moment';
import Grid from '../components/Grid'




const {Content } = Layout;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'MM/DD/YYYY';
class Layout_ extends Component {
  
  state = {
    hinter_first: false,
    hinter_Second: false,
    duration:0.8,
    filter:false,
    start_date :'',
    end_date:''
  };

  render() {
    const { hinter_first, hinter_Second, duration } = this.state;
      let hint = null;
      if(hinter_first){
        message.info('Select Start Date', duration);
      }else if(hinter_Second){
        message.info('Select End Date', duration);
      }
    return (
      <Content>
        <div style={{width:"100% ",height: "10%",padding:"20px", marginLeft : "30%",display: "flex"}} >
          <div style={{marginRight:"20px"}}>
          <DatePicker  onChange={this.onStartDateChange} 
                        size="large" 
                        format={dateFormat}
                        onMouseEnter={this.onHintStartDate} 
                        onMouseLeave={this.onMouseleaveHinterFirst} >Start Date</DatePicker>
          </div>          
          <DatePicker  onChange={this.onEndDateChange} 
                        size="large" 
                        format={dateFormat}
                        onMouseEnter={this.onHintEtartDate} 
                        onMouseLeave={this.onMouseleaveHinterSecond}/>
          <Button type="primary" style={{marginLeft:"5%",paddingLeft:"5%",paddingRight:"5%"}} size="large" onClick={this.onFilter}>Filter</Button>
        </div>
        <div> <Grid {...this.state}/> </div>
      </Content>
    );
  }

  onFilter = ()=> {
      this.setState({
        filter : true
      })
}

  onStartDateChange = (date, dateString)=> {
    this.setState({
      start_date : dateString
    })
   
}

onEndDateChange = (date, dateString)=> {
  this.setState({
    end_date : dateString
  })
}

  onHintStartDate = ()=> {
    this.setState({
      hinter_first : true
    })
  }

  onHintEtartDate = ()=> {
    this.setState({
      hinter_Second : true
    })
  }

  onMouseleaveHinterFirst = ()=> {
    this.setState({
      hinter_first : false
    })
  }

  onMouseleaveHinterSecond = ()=> {
    this.setState({
      hinter_Second : false
    })
  }
}

export default Layout_;

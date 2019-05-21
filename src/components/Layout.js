import React, { Component } from "react";
import { DatePicker, Button, Alert, message } from 'antd';
import moment from 'moment';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
class Layout extends Component {
  
  state = {
    hinter_first: false,
    hinter_Second: false,
    duration:0.6,
    start_date :'',
    end_date:''
  };

  onChange = (date, dateString)=> {
    //var startDateString = dateString;
    //var startDateStrin = startDateString.split(",");
  alert(dateString);
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



  render() {
    const { hinter_first, hinter_Second, duration } = this.state;
      let hint = null;
      if(hinter_first){
        message.info('Select Start Date', duration);
      }else if(hinter_Second){
        message.info('Select End Date', duration);
      }
    return (
      <div style={{padding:"20px"}} >
        <DatePicker  onChange={this.onChange} 
                      size="default" 
                      onMouseEnter={this.onHintStartDate} 
                      onMouseLeave={this.onMouseleaveHinterFirst}>Start Date</DatePicker>
        <DatePicker  onChange={this.onChange} 
                      size="default" 
                      onMouseEnter={this.onHintEtartDate} 
                      onMouseLeave={this.onMouseleaveHinterSecond}/>
        <Button type="primary" style={{marginLeft:"50px",paddingLeft:"30px",paddingRight:"30px"}} size="large">Filter</Button>
      </div>
    );
  }
}

export default Layout;

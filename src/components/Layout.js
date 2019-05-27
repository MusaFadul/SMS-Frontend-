import React, { Component } from "react";
import { DatePicker, Button, Alert, message,Layout, Tooltip } from 'antd';
import moment from 'moment';
import Grid from '../components/Grid'
import { connect } from 'react-redux'

const {Content } = Layout;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'MM/DD/YYYY';
class Layout_ extends Component {
  
  state = {
    
    filter:false,
    filterBut: ""
  };

  render() {   
    return (
      <Content>
        <div style={{padding:"20px", marginLeft : "30%",display: "flex" }} >
          <div style={{marginRight:"20px",display: "flex"}}>
            <Tooltip placement="top" title= " Select Start Date " arrowPointAtCenter>
              <DatePicker  onChange={this.onStartDateChange} 
                size="large" 
                format={dateFormat}
              >Start Date</DatePicker>
            </Tooltip>
          </div>  
            <Tooltip placement="top" title= " Select End Date" arrowPointAtCenter>
              <DatePicker  onChange={this.onEndDateChange} 
                size="large" 
                format={dateFormat} 
               />
          </Tooltip>        
          <Button type="primary" style={{backgroundColor : this.state.filterBut, marginLeft:"5%",paddingLeft:"5%",paddingRight:"5%"}} size="large"
           onClick={this.onFilter}
           onMouseOver = {()=>this.setState({filterBut : "red" })} onMouseLeave = {()=>this.setState({filterBut : "" })}>Filter</Button>
        </div>
        <div> <Grid {...this.state}/> </div>
      </Content>
    );
  }

  onFilter = ()=> {
    this.setState({
      filter : true
    })
  const dateRange = {startDate : this.state.start_date , endDate : this.state.end_date}
  this.props.onDateRangeFilter(dateRange)
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
}

const mapStateToProps = state => {
  return {
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
    onDateRangeFilter : (dateRange) => dispatch({type: 'DATERANGEFILTER', payload:dateRange}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Layout_);

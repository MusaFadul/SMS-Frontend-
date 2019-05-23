import React, { Component } from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Footer_ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Footer style = {{
        marginTop:'10px',
        left: '0',
        bottom:'0',
        width: '100%', 
        textAlign: 'center'}}>
        <hr />      
                ©2019 Musa Fadul   
      </Footer>
    );
  }
}

export default Footer_;

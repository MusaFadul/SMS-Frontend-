import React, { Component } from "react";
import Header from "../Header";
import Backdrop from '../../ui/BackDrop'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import { connect } from 'react-redux'
import { Layout } from 'antd';
const {  Footer } = Layout;


class NavigatorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   
    const { component } = this.props;
    return (
      <div tysle={{backgroundColor : this.props.AppTheme}}>
         <Backdrop />
         <SideDrawer/>
          <header>
            <Header {...this.props} />
          </header>
        
        {component}
        <footer  >
        <Footer style = {{
        marginTop:'10px',
        left: '0',
        bottom:'0',
        width: '100%', 
        textAlign: 'center', backgroundColor : this.props.AppTheme}}>
        <hr />      
                ©2019 Musa Fadul   
      </Footer>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AppTheme : state.AppTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideBackdrop : () => dispatch({type: 'HIDEBACKDROP'}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (NavigatorWrapper);

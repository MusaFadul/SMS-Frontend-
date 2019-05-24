import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Backdrop from '../../ui/BackDrop'
import SideDrawer from '../../components/SideDrawer/SideDrawer'


class NavigatorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   
    const { component } = this.props;
    return (
      <div className="navigation">
         <Backdrop />
         <SideDrawer/>
          <header>
            <Header {...this.props} />
          </header>
        
        {component}
        <footer>
          <Footer {...this.props} />
        </footer>
      </div>
    );
  }
}

export default NavigatorWrapper;

import React, { Component } from "react";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  
    return (
      <div className="row header-container u-background-color-white">
        <div className="col-lg-8 offset-lg-2">
          <div className="header header-primary">
            <div className="header__user-area ">
            <a href="/"> <i className="fa fa-bars" /> </a>
            </div>
            <div className="header__brand ">SMS Coding Challenge</div>
            <div className="header__user-area">
             <a href="/form"> <i className="fa fa-user" /> </a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

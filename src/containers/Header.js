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
            <div className="header__logo ">
              <i className="fa fa-bars" />
            </div>
           
            <div className="header__user-area">
              <i className="fa fa-user" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

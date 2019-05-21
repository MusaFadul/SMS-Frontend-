import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWindowPathWithSearchParams() {
    const {
      location: { search, pathname }
    } = this.props;
    const searchItems = search.split("?");
    const prefix = window.location.hostname === "localhost" ? "" : "/flat";
    let newPath = prefix + pathname;
    searchItems.forEach(item => {
      const stra2 = item.split("=");
      if (stra2.length > 1) {
        const key = stra2[0];
        let value = stra2[1];
        if (key !== "locale") {
          newPath += "?" + key + "=" + value;
        }
      }
    });

    return newPath;
  }

  render() {
    const path = this.getWindowPathWithSearchParams();
    return (
      <div className="footer">
        <hr />
        <div className="row ">
          <div className="col-lg-8 offset-lg-2">
            <ul className="footer__languages">
              <li>
                <a href={`${path}?locale=ar`}>German</a>
              </li>
              <li>
                <a href={`${path}?locale=en`}>English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

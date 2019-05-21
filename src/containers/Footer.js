import React, { Component } from "react";


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <hr />
        <div className="row ">
          <div className="col-lg-8 offset-lg-2">
            <ul className="footer__languages">
              <li>
                <a >German</a>
              </li>
              <li>
                <a >English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

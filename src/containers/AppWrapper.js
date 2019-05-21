import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";

import Navigator from "../containers/Navigator";



class AppWrapper extends Component {


   


  

  render() {
   
    return (
     
        <Navigator />
      
    );
  }
}

export default AppWrapper;

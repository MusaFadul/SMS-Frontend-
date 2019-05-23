import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '../components/Grid'
import NavigatorWrapper from "./navigator/NavigatorWrapper";
import FormValidation from '../pages/FormValidation';
import Layout from '../components/Layout';
import RegistrationForm from '../pages/Form'

class Navigatgor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={routeProps => (
            <NavigatorWrapper
              component={<Layout {...routeProps} {...this.props} />}
              {...routeProps}
              {...this.props}
            />
          )}
        />
        <Route
          exact
          path="/form"
          component={routeProps => (
            <NavigatorWrapper
              component={<RegistrationForm {...routeProps} {...this.props} />}
              {...routeProps}
              {...this.props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Navigatgor;

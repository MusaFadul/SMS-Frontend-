import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Route, Switch } from "react-router-dom";
import Grid from '../components/Grid'
import NavigatorWrapper from "./navigator/NavigatorWrapper";
import FormValidation from '../pages/FormValidation';

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
              component={<Grid {...routeProps} {...this.props} />}
              {...routeProps}
              {...this.props}
            />
          )}
        />
        <Route
          exact
          path="/home"
          component={routeProps => (
            <NavigatorWrapper
              component={<Grid {...routeProps} {...this.props} />}
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
              component={<FormValidation {...routeProps} {...this.props} />}
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

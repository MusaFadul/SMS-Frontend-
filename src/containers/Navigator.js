import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '../components/Grid'
import NavigatorWrapper from "./navigator/NavigatorWrapper";
import FormValidation from '../pages/Form';
import Layout from '../components/Layout';
import RegistrationForm from '../pages/Form'
import { connect } from 'react-redux'


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
              component={this.renderContent()}
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
  renderContent = ()=> {
    let componentContent = <Layout/>
    if(this.props.form) {
      componentContent = <RegistrationForm/>;
    }
    return componentContent;
  }
}

const mapStateToProps = state => {
  return {
      form : state.form,
      grid: state.grid
  };
};

export default connect(mapStateToProps) (Navigatgor);

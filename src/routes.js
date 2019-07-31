import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ProfilePage, LoginPage } from './views/pages';
import { withAuth } from './helpers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/profile" component={withAuth(ProfilePage)} />
    <Route exact path="/login" component={LoginPage} />
  </Switch>
);

export default Routes;

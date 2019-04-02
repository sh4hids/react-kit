import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer, UsersContainer } from './views/containers';
import { withAuth } from './helpers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/users" component={withAuth(UsersContainer)} />
  </Switch>
);

export default Routes;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth'
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component= {UserIsAuthenticated(Dashboard)} />
          <Route exact path="/layout/Dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route exact path="/clients/AddClient" component={UserIsAuthenticated(AddClient) } />
          <Route exact path="/client/:id" component={ClientDetails} />
          <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient) } />
          <Route exact path="/auth/login" component={UserIsNotAuthenticated(Login)}/>
        </Switch>
      </div>
    );
  }
}
export default Routes;

import React, { Component } from 'react';
import { Route,  Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/layout/Dashboard"
            component={Dashboard}
          />
          <Route exact path="/clients/AddClient"component={AddClient}/>
        <Route exact path='/client/:id' component={ClientDetails}/>
        </Switch>
      </div>
    );
  }
}
export default Routes;

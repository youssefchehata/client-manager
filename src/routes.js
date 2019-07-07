import React, { Component } from 'react';
import { Route,  Switch } from 'react-router-dom';
import App from './App';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/App" component={App} />
          <Route
            exact
            path="/layout/Dashboard"
            component={Dashboard}
          />
          <Route exact path="/clients/AddClient"component={AddClient}/>
        </Switch>
      </div>
    );
  }
}
export default Routes;
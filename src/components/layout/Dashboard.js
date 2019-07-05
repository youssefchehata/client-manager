import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Clients from '../clients/Clients';
import Sidebar from './Sidebar';

export class Dashboard extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container">
        <div className=" row ">
          <div className="col-md-10">
            <Clients />
          </div>
          <div className="col-md-2">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

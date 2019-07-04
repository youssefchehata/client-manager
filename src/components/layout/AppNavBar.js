import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AppNavBar extends Component {
  render() {
    return (
      <div className="nav navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Client Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/layout/Dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppNavBar;

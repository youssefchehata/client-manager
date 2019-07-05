import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export class Clients extends Component {
  state = {
    clients: [
      {
        id: 1,
        firstName: 'jo ',
        lastName: 'joelle',
        email: 'jo@gmail.com',
        phone: '555-555-5555',
        balance: '30'
      },
      {
        id: 1,
        firstName: 'yo ',
        lastName: 'yooyoy',
        email: 'yoyo@gmail.com',
        phone: '222-555-1111',
        balance: '50'
      },
    ]
  };
  render() {
    const { clients } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              Clients
            </h2>
          </div>
          <div className="col-md-6">
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Balane</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>${parseFloat(client.balance).toFixed(2) }</td>
                    <td>
                      <Link
                        to={`/client/${client.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fas fa-arrow-circle-right" /> Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
Clients.propTypes = {};
export default Clients;

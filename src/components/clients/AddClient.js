import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { connect } from 'react-redux'; //get some state
import { firestoreConnect } from 'react-redux-firebase';
// import Clients from './Clients';
class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: ''
  };
  onSubmit = e => {
    e.preventDefault();
    const newClient = this.state;
    const { firestore } = this.props;
    if (newClient.balance === '') {
      return (newClient.balance = 0);
    }
    firestore
      .add({ collection: 'clients' }, newClient)
      .then(() => this.props.history.push('/layout/Dashboard'));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { firstName, lastName, email, phone, balance } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <Link to="/layout/Dashboard" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  minLength="2"
                  required
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  minLength="2"
                  required
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  className="form-control"
                  minLength="8"
                  required
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  type="text"
                  name="balance"
                  value={balance}
                  className="form-control"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <input
                type="submit"
                value="submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
AddClient.propTypes={
  firestore:PropTypes.object.isRequired
}
export default firestoreConnect()(AddClient);

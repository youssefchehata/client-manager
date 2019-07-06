import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AddClient extends Component {
  state = {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      balance:''

  };
  onChange=(e)=>{
 this.setState({
     [e.target.name]:e.target.value
 })
  }
  render() {
      const {firstName,lastName,email,phone,balance}=this.state
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
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                 type="text"
                 name='firstName'
                 value={firstName}
                  className="form-control" 
                  minLength='2'
                  required
                  onChange={(e)=>this.onChange(e)}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                 type="text"
                 name='lastName'
                 value={lastName}
                  className="form-control" 
                  minLength='2'
                  required
                  onChange={(e)=>this.onChange(e)}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                 name='email'
                 value={email}
                  className="form-control" 
                  onChange={(e)=>this.onChange(e)}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                 type="text"
                 name='phone'
                 value={phone}
                  className="form-control" 
                  minLength='8'
                  required
                  onChange={(e)=>this.onChange(e)}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                 type="text"
                 name='balance'
                 value={balance}
                  className="form-control" 
                   onChange={(e)=>this.onChange(e)}
                  />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddClient;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
class EditClient extends Component {
  constructor(props){
    super(props) ;
      this.firstNameInput = React.createRef()
      this.lastNameInput = React.createRef()
      this.emailInput = React.createRef()
      this.phoneInput = React.createRef()
      this.balanceInput = React.createRef()
    
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const {client,firestore}=this.props
    //Update Client
    const updClient = {
      firstName: this.firstNameInput.current.value ,
      lastName : this.lastNameInput.current.value ,
      email    : this.emailInput.current.value ,
      phone    : this.phoneInput.current.value ,
      balance  : this.balanceInput.current.value===''?0: this.balanceInput.current.value
    }
    //Update client in fireStore
    firestore.update({collection:'clients',doc:client.id},updClient)
    .then(this.props.history.push('/'))

  }
  
  lastNameInput
  render() {
    const { client } = this.props;
    const {disableBalanceOnEdit}=this.props.settings
    
    if (client) {
      return (
        <div className="container">
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
                    defaultValue={client.firstName}//get input by props
                    ref={this.firstNameInput} //for edit
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    defaultValue={client.lastName}
                    ref={this.lastNameInput}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    defaultValue={client.email}
                    ref={this.emailInput}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    defaultValue={client.phone}
                    ref={this.phoneInput}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  <input
                    type="text"
                    defaultValue={client.balance}
                    ref={this.balanceInput}
                    className="form-control"
                    disabled={disableBalanceOnEdit}
                  />
                </div>
                <input
                  type="submit"
                  defaultValue="submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};
export default compose(
  firestoreConnect(props => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered },settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings:settings
  }))
)(EditClient);

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import ReactDOM from 'react-dom';

export default class RecuperarContraseña extends React.Component{
  handleSubmit(){
    const username=ReactDOM.findDOMNode(this.refs.username).value.trim();
    const email=ReactDOM.findDOMNode(this.refs.email).value.trim();
    Accounts.forgotPassword({email:email} ,function(err){
      if(err)
      {}else{
          FlowRouter.go('/Email');
      }

    });
  FlowRouter.go('/Email');
  }
  render(){
    return(
      <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                  <div className="input-field col s12">
                      <input placeholder="Username" ref='username' id="username" type="text" className="validate"/>
                      <label htmlFor="username">User Name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input id="email" ref='email' type="email" className="validate"/>
                      <label htmlFor="email">Email</label>
                  </div>
              </div>
              <div className="row">
                <div className="col s6 offset-s5">
                  <button className="btn waves-effect waves-light" type="submit">Login
                     <i className="material-icons right">send</i>
                   </button>
                </div>
              </div>
          </form>
      </div>
    );
  }
}

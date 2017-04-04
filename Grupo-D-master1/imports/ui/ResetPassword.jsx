import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import ReactDOM from 'react-dom';

export default class ResetContraseña extends React.Component{
  constructor(props){
      super(props);
      this.state={
        mensaje:'',
      }
    }
  handleSubmit(){
    const newpassword=ReactDOM.findDOMNode(this.refs.newpassword).value.trim();
    const confirmpassword=ReactDOM.findDOMNode(this.refs.confirmpassword).value.trim();
    if(newpassword === confirmpassword)	{
      Accounts.resetPassword(this.props.token, newpassword, (error) => {

      });
        FlowRouter.go('/Login');
		}else{

        this.setState({
          mensaje:'No coinciden',
      });
    }
  }
  render(){
    return(
      <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                  <div className="input-field col s12">
                      <input placeholder="New Password" ref='newpassword' id="newpassword" type="password" className="validate"/>
                      <label htmlFor="newpassword">New Password</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input id="confirmpassword" ref='confirmpassword' type="password" className="validate"/>
                      <label htmlFor="confirmpassword">Confirm Password</label>
                  </div>
              </div>
              {this.state.mensaje}
              <div className="row">
                <div className="col s6 offset-s5">
                  <button className="btn waves-effect waves-light" type="submit">Aceptar
                   </button>
                </div>
              </div>
          </form>
      </div>
    );
  }
}

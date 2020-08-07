import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showdataList } from '../../Redux/actions/index';


class UserLogin extends React.Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
      }
  
    };
  
    submituserLoginForm = (event) => {
      event.preventDefault();

        if((this.state.email) === 'hruday@gmail.com' && (this.state.password) === 'hruday123'){
          this.props.showdataList({emailData : this.state.email});
          this.props.history.push('dashboard')
          }else if((this.state.email) === '' && (this.state.password) === ''){
            alert('Please give data')
          }else{
            alert('Please give proper username & password')
          }
    }
  
  
    render() {
      return (
        <div className=" LoginPage ">
            <form>
              <div> 
                <input
                  className= "InputBoxLogin"
                  type="text"
                  name="emailId"
                  maxLength='200'
                  value={this.state.email}
                  placeholder="Enter Username"
                  onChange={(text) => { this.setState({ email: text.target.value }) }}
                />
                <p id="emailIdError" className="errorMsg"></p>
              </div>
  
              <div>
                <input
                  className= "InputBoxLogin"
                  type="password"
                  name="password"
                  maxLength='20'
                  minLength='8'
                  value={this.state.password}
                  placeholder="Enter Password"
                  onChange={(text) => { this.setState({ password: text.target.value }) }}
                />
                <p id="passowrdError" className="errorMsg"></p>
              </div>
  
              <button
                className= "LoginButton"
                type="button"
                onClick={this.submituserLoginForm}>Login</button>    
  
            </form>
          </div>  
      );
    }
  
  
  }


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
          showdataList
        },
        dispatch
    );
}
  
  
  export default connect(null, mapDispatchToProps) (UserLogin);
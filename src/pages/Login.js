import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import { withAuth } from "../lib/AuthProvider";
import './Signin.css';

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  

  render() {
    const { email, password } = this.state;

    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input type='email' name='email' value={email} placeholder="Email" className="input-Form" onChange={this.handleChange}/>
          <input type='password' name='password' value={password} placeholder="Password" className="input-Form" onChange={this.handleChange}/>
          <input type='submit' className="signin-btn" value='LOGIN' />
        </form>

      </>
    );
  }
}

export default withAuth(Login);

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
          <label>Email:</label>
          <input type='email' name='email' value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type='password' name='password' value={password} onChange={this.handleChange}/>

          <input type='submit' value='Login' />
        </form>

      </>
    );
  }
}

export default withAuth(Login);

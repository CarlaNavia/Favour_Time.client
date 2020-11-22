import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { name: '' , lastName: '', email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name , lastName, email, password} = this.state;

    this.props.signup({ name , lastName, email, password });
    this.props.history.push("/")
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name , lastName, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={name} onChange={this.handleChange}/>

          <label>Last Name:</label>
          <input type='text' name='lastName' value={lastName} onChange={this.handleChange}/>

          <label>Email:</label>
          <input type='email' name='email' value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type='password' name='password' value={password} onChange={this.handleChange}/>

          <input type='submit' value='Signup' />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);

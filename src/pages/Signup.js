import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { name: "", lastName: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, lastName, email, password } = this.state;

    this.props.signup({ name, lastName, email, password })
    this.props.onClose()
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, lastName, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            className="input-Form"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            className="input-Form"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            className="input-Form"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            className="input-Form"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <input type="submit" className="signin-btn" value="SIGN UP" />
        </form>
      </>
    );
  }
}

export default withAuth(Signup);

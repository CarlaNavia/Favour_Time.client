import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserDetails extends Component {
  render() {
    return (
      <div>
        <h1>My Profile:</h1>
        <h3>Street name:{this.props.user.address.streetName}</h3>
        <p>{this.props.user.dateOfBirth}</p>
        <p>{this.props.user.name}</p>
        <Link to={`/profile/edit/${this.props.user._id}`} >
            Edit
        </Link>
      </div>
    );
  }
}

export default UserDetails;

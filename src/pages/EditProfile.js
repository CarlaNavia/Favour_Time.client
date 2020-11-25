import React, { Component } from "react";
import HeaderProfile from "../components/HeaderProfile";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";
import "../pages/Profile/Profile.css";

class EditProfile extends Component {
  state = {
    currentUser: {},
  };
  componentDidMount() {
    let copyUser = this.props.user;
    //formatear fecha
    this.setState({
      currentUser: copyUser,
    });
  }

  handleDateOfBirthChange(event) {
    let copyUser = this.state.currentUser;
    copyUser.dateOfBirth = event.target.value;
    this.setState({ currentUser: copyUser });
  }

  handleNameChange(event) {
    let copyUser = this.state.currentUser;
    copyUser.name = event.target.value;
    this.setState({ currentUser: copyUser });
  }

  handleImageProfile(event) {
    const files = event.target.files[0];
    UserService.uploadPhoto(files).then((data) => {
      this.setState({ currentUser: data });
    });
  }
  handleInputChange(event, propertyName) {
    let copyUser = this.state.currentUser;
    copyUser[propertyName] = event.target.value;
    this.setState({ currentUser: copyUser });
  }

  handleSubmit(event) {
    event.preventDefault();
    UserService.uploadProfile(
      this.state.currentUser._id,
      this.state.currentUser
    ).then(() => {
      this.props.history.push("/profile");
    });
  }

  render() {
    return (
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />
        <h1 className="h1_title ">EDIT MY PROFILE</h1>
        <form className="align_form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentUser.name}
            onChange={(e) => this.handleNameChange(e)}
          />
          <br />
        
          <label>Lastname:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentUser.lastName}
            onChange={(e) => this.handleInputChange(e, "lastName")}
          />
          <br />
          <label>Date of Birth:</label>
          <input
            className="form_profile"
            type="date"
            defaultValue={this.state.currentUser.dateOfBirth}
            onChange={(e) => this.handleDateOfBirthChange(e)}
          />
          <br />
          <label>Phone number:</label>
          <input
            className="form_profile"
            type="number"
            defaultValue={this.state.currentUser.phoneNumber}
            onChange={(e) => this.handleInputChange(e, "phoneNumber")}
          />
          <br />
          <label>Image:</label> <br />
          <input
            className="form_profile"
            type="file"
            defaultValue={this.state.currentUser.imageProfile}
            onChange={(e) => this.handleImageProfile(e)}
          />
          <br />
          <button className="buttons_profile">Save</button>
        </form>
      </div>
    );
  }
}
export default withAuth(EditProfile);

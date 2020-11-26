import React, { Component } from "react";
import HeaderProfile from "../components/HeaderProfile";
import Navbar from "../components/navbar/Navbar";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";
import "../pages/Profile/Profile.css";
import { Link } from "react-router-dom";

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
    var pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
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
      <>
      <Navbar/>
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />
        <Link to={"/profile"}>
            <img
              className="icons"
              src="../../002-flecha-izquierda.png"
              alt="back"
            />
          </Link>
        <h1 className="h1_title ">EDIT MY PROFILE</h1>
        <form className="align_form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentUser.name}
            onChange={(e) => this.handleNameChange(e)}
          />
        
          <label>Lastname:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentUser.lastName}
            onChange={(e) => this.handleInputChange(e, "lastName")}
          />

          <label>Date of Birth:</label>
          <input
            className="input_Form"
            type="date"
            defaultValue={this.state.currentUser.dateOfBirth}
            onChange={(e) => this.handleDateOfBirthChange(e)}
          />

          <label>Phone number:</label>
          <input
            className="input_Form"
            type="number"
            defaultValue={this.state.currentUser.phoneNumber}
            onChange={(e) => this.handleInputChange(e, "phoneNumber")}
          />

          <label>Image:</label>
          <label htmlFor="file-upload" className="uploadEdit">
              Upload photo
            </label>
            <input id="file-upload"
              type="file"
              defaultValue={this.state.currentUser.imageProfile}
              onChange={(e) => this.handleImageProfile(e)}
              className="uploadEdit"
              style={{ display: 'none' }}
            />
            <div id="info"></div>
          {/* <label>Image:</label>
          <input
            className="input_Form"
            type="file"
            defaultValue={this.state.currentUser.imageProfile}
            onChange={(e) => this.handleImageProfile(e)}
          /> */}
   
          <button className="buttons_profile">Save</button>
        </form>
      </div>
      </>
    );
  }
}
export default withAuth(EditProfile);

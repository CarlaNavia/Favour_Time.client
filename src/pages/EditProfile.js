import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";

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

  handleImageProfile(event) {
    const files = event.target.files[0];
    UserService.uploadPhoto(files).then((data) => {
      this.setState({ currentUser: data });
    });
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
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Date of Birth:</label>
          <input
            type="date"
            defaultValue={this.state.currentUser.dateOfBirth}
            onChange={(e) => this.handleDateOfBirthChange(e)}
          />
          <label>Image:</label>
          <input
            type="file"
            defaultValue={this.state.currentUser.imageProfile}
            onChange={(e) => this.handleImageProfile(e)}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default withAuth(EditProfile);

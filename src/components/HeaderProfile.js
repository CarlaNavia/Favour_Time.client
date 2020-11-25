import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import NavBar from '../components/navbar/Navbar';

class HeaderProfile extends Component {
  getImageProfile() {
    if (this.props.user.imageProfile) {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    if (this.props.user.review.length === 0) {
      return 0;
    }
    const result = this.props.user.review.reduce(
      (previousReview, currentReview) => ({
        rating: previousReview.rating + currentReview.rating,
      })
    );
    const averageReviews = result.rating / totalReviews;
    return averageReviews;
  }

  render() {
    console.log(this.props, "props");
    return (
      <div className="columns is-mobile heading_position">
       <NavBar/>
        <div className="column is-four-fifths-desktop ">
          <h3>{this.props.user.name}</h3>
          <p>{this.props.user.credits} credits</p>
          <div className="align_buttons">
            <Link
              className="buttons_profile"
              to={`/profile/edit/${this.props.user._id}`}
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="column position_img">
          <img
            src={this.getImageProfile()}
            alt="profile"
            className="profile_img"
          />
          <Rating rating={this.getUserRating()} />
        </div>
      </div>
    );
  }
}
export default HeaderProfile;

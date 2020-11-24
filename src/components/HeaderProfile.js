import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating"

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
    return (
      <div className="columns is-mobile">
        <div className="column is-four-fifths-desktop ">
          <button onClick={this.props.history.goBack}>Back</button>
          <h3>{this.props.user.name}</h3>
          <p>{this.props.user.credits} credits</p>
          <div className="align_buttons">
           
              <Link className="buttons_profile" to={`/profile/edit/${this.props.user._id}`}>
                Edit Profile
              </Link>
           
            <button className="buttons_profile">
              Log out
            </button>
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

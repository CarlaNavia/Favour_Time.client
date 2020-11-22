import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import MyBookings from "../components/MyBookings";
import MyRequests from "../components/MyRequests";
import UserDetails from "../components/UserDetails";

class Profile extends Component {
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    if (this.props.user.review.length == 0) {
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

  getImageProfile() {
    if (this.props.user.imageProfile !== "") {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.credits} credits</p>

        <img src={this.getImageProfile()} />
        <p>{this.getUserRating()}/5</p>
        <MyBookings userId={this.props.user._id} />
        <MyRequests userId={this.props.user._id} />
        <UserDetails user={this.props.user} />
      </div>
    );
  }
}

export default withAuth(Profile);

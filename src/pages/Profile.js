import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";

class Profile extends Component {
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    const result = this.props.user.review.reduce((previousReview, currentReview) => ({
      rating: previousReview.rating + currentReview.rating,
    }));
    const averageReviews = result.rating / totalReviews;
    return averageReviews;
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.credits} credits</p>
        <p>{this.props.user.imageProfile}</p>
        <p>{this.getUserRating()}</p>
      </div>
    );
  }
}

export default withAuth(Profile);

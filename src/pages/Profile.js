import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";
import MyBookings from "../components/MyBookings";


class Profile extends Component {
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    if(this.props.user.review.length == 0) {
        return 0
    }
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
        <MyBookings userId={this.props.user._id}/>

      </div>
    );
  }
}

export default withAuth(Profile);

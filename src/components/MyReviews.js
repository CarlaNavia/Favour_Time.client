import React, { Component } from "react";
import BookingService from "../lib/booking-service";
import BookingList from "./BookingList";

class MyReviews extends Component {
  state = {
    listOfReviews: [],
  };
  componentDidMount() {
    this.getMyReviews();
  }

  getMyReviews() {
    BookingService.getReviewsByUserID(this.props.userId).then((reviews) =>
      this.setState({ listOfReviews: reviews })
    );
  }
  render() {
    return (
      <div>
        <h1>My reviews:</h1>
        {this.state.listOfReviews.length === 0 &&
          "Unfortunately you don't have any review yet."}
        {this.state.listOfReviews.length > 0 && (
          <BookingList bookings={this.state.listOfReviews} />
        )}
      </div>
    );
  }
}
export default MyReviews;

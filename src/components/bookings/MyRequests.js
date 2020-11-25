import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
import BookingList from "./BookingList";

class MyRequests extends Component {
  state = {
    listOfRequests: [],
  };
  componentDidMount() {
    this.getMyRequests();
  }

  getMyRequests() {
    BookingService.getRequestsByUserID(this.props.userId)
    .then((requests) => this.setState({ listOfRequests: requests }));
  }

  render() {
    return (
      <div>
        <h1>My requests:</h1>
        {this.state.listOfRequests.length === 0 &&
          "Unfortunately you have not any request yet."}
        {this.state.listOfRequests.length > 0 && (
          <BookingList isOwner bookings={this.state.listOfRequests} />
        )}
      </div>
    );
  }
}

export default MyRequests;

import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class MyBookings extends Component {
  state = {
    listOfBookings: [],
  };
  componentDidMount() {
    this.getMyBookings();
  }
  getMyBookings() {
    BookingService.getBookingsByUserID(this.props.userId).then((bookings) =>
      this.setState({ listOfBookings: bookings })
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.userId}</h1>
      </div>
    );
  }
}
export default MyBookings;

import React, { Component } from "react";
import BookingService from "../lib/booking-service";
import BookingList from './BookingList';


class MyBookings extends Component {
  state = {
    listOfBookings: [],
  };
  componentDidMount() {
    this.getMyBookings();
  }
  getMyBookings() {
    BookingService.getBookingsByUserID(this.props.userId)
    .then((bookings) =>
      this.setState({ listOfBookings: bookings })

    );
  }


  render() {
    return (
      <div>
        <h1>My bookings:</h1>
        { this.state.listOfBookings.length === 0 && "Unfortunately you have not booked any service yet."}
        { this.state.listOfBookings.length > 0 && <BookingList bookings={this.state.listOfBookings}/>}

      </div>
    );
  }
}
export default MyBookings;

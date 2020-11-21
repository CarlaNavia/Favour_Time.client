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
  renderMyBookings() {
      return (
          <ul> {this.state.listOfBookings.map((eachBooking, index) => {
                return  <li>{eachBooking.service.serviceName}</li>
          })}
             
          </ul>
      )
  }

  render() {
    console.log(this.state.listOfBookings, "listOF")
    return (
      <div>
        <h1>My bookings:</h1>
        { this.state.listOfBookings.length === 0 && "Unfortunately you have not booked any service yet."}
        { this.state.listOfBookings.length > 0 && this.renderMyBookings()}

      </div>
    );
  }
}
export default MyBookings;

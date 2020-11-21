import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class BookingList extends Component {

    handleClick(bookingId, status) {
        BookingService.changeTheBookingStatus(bookingId, status)
    }

  renderButtons(bookingId) {
    return (
      <div>
        <button onClick={()=>this.handleClick(bookingId, "accepted")}>Accept</button>
        <button onClick={()=>this.handleClick(bookingId, "declined")}>Declined</button>
      </div>
    );
  }
  render() {
    return (
      <ul>
        {this.props.bookings.map((eachBooking, index) => {
          return (
            <li key={eachBooking._id}>
              {eachBooking.service.serviceName}
              {this.props.isOwner && eachBooking.status==="pending" && this.renderButtons(eachBooking._id)}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BookingList;


import React, { Component } from "react";
import BookingService from "../lib/booking-service";
import { Link } from "react-router-dom";

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

  renderReviewButton (bookingId){
    return (
      <Link to={`/add-a-review/${bookingId}`}>Add a review</Link>
    )
  }
  render() {
    console.log(this.props.bookings, this.props.isOwner)
    return (
      <ul>
        {this.props.bookings.map((eachBooking, index) => {
          return (
            <li key={eachBooking._id}>
             <p>{eachBooking.service.serviceName}</p> 
              <p>{eachBooking.status}</p>
              <p>{eachBooking.service.description}</p>
              {this.props.isOwner && eachBooking.status==="pending" && this.renderButtons(eachBooking._id)}
              {!this.props.isOwner && !eachBooking.review && eachBooking.status ==="accepted" && this.renderReviewButton(eachBooking._id)}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BookingList;


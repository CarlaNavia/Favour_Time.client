import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
import { Link } from "react-router-dom";
import "../../pages/Profile/Profile.css"

class BookingList extends Component {
  

  renderButtons(bookingId) {
    return (
      <div>
        <button className="buttons_profile " onClick={() => this.props.onAccept(bookingId, "accepted")}>
          Accept
        </button>
         <button className="buttons_profile " onClick={() => this.props.onDelete(bookingId, "declined")}>
          Declined
        </button>
      </div>
    );
  }

  renderReviewButton(bookingId) {
    return <Link to={`/add-a-review/${bookingId}`} className="buttons_profile">Add a review</Link>;
  }
  render() {
    console.log(this.props.isOwner, "booking owner")
    return (
      <ul>
        {this.props.bookings.map((eachBooking, index) => {
          return (
            
            <div key={eachBooking._id} className="columns is-mobile border">
              <div className="column is-two-fifths-desktop">
                <p className="name">{eachBooking.service.serviceName}</p>
                <p>{eachBooking.date}</p>
                <p>{eachBooking.time}</p>
              </div>
              <div className="column">
                <p>Status: {eachBooking.status}</p>
              </div>
              <div className="column">
                {this.props.isOwner &&
                  eachBooking.status === "pending" &&
                  this.renderButtons(eachBooking._id)}
                {!this.props.isOwner &&
                  !eachBooking.review &&
                  eachBooking.status === "accepted" &&
                  this.renderReviewButton(eachBooking._id)}
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default BookingList;

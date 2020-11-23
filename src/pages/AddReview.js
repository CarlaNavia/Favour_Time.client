import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class AddReview extends Component {
  state = {
    review: {},
    booking: {},
    hasInformation: false,
  };

  componentDidMount() {
    this.getTheBookingReviewed();
  }

  getTheBookingReviewed() {
    const { params } = this.props.match;
    BookingService.getOneBooking(params.bookingId).then((data) => {
      this.setState({ booking: data, hasInformation:true })
    });
  }

  handleInputChange(event, propertyName) {
    let copyReview = this.state.review;
    copyReview[propertyName] = event.target.value;
    this.setState({ review: copyReview });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;
    BookingService.addANewReview(
      params.bookingId,
      this.state.review
    ).then((data) => this.props.history.push("/profile"));
  }
  renderBookingInfo() {
    return (
      <div>
        <h1>{this.state.booking.ownerService.name}</h1>
        <h1>{this.state.booking.service.serviceName}</h1>
        <h1>{this.state.booking.date}</h1>
        <h1>{this.state.booking.time}</h1>
        <h1>{this.state.booking.extraInformation}</h1>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.hasInformation && this.renderBookingInfo()}

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Description:</label>
          <input
            type="text"
            defaultValue={this.state.review.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          />
          <label>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            defaultValue={this.state.review.rating}
            onChange={(e) => this.handleInputChange(e, "rating")}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default AddReview;

import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class AddReview extends Component {
  state = {
    review: {},
  };


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

  render() {
    return (
      <div>
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

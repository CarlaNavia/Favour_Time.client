import React, { Component } from "react";
import HeaderProfile from "../components/HeaderProfile";
import BookingService from "../lib/booking-service";
import { withAuth } from "../lib/AuthProvider";
import ServiceListItem from "../components/ServiceList/ServiceListItem";
import "../pages/Profile/Profile.css";
import { Link } from "react-router-dom";

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
      this.setState({ booking: data, hasInformation: true });
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
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />
        <Link to={"/profile"}>
            <img
              className="icons"
              src="../../002-flecha-izquierda.png"
              alt="back"
            />
          </Link>
        <h1 className="h1_title ">SERVICE TO BE REVIEWED:</h1>
        {this.state.hasInformation && (
          <ServiceListItem oneService={this.state.booking.service} />
        )}
        <h1 className="h1_title ">ADD YOUR REVIEW:</h1>
        <form className="align_form" onSubmit={(e) => this.handleSubmit(e)}>
          <label className="label_margin ">Description:</label>
          <input className="form_profile"
            required
            type="text"
            defaultValue={this.state.review.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          /><br/>
          <label className="label_margin ">Rating:</label>
          <input className="form_profile"
            required
            type="number"
            min="1"
            max="5"
            defaultValue={this.state.review.rating}
            onChange={(e) => this.handleInputChange(e, "rating")}
          /><br/>
          <button className="buttons_profile">Save</button>
        </form>
      </div>
    );
  }
}

export default withAuth(AddReview);

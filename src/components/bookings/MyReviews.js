import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
import "../../pages/Profile/Profile.css"

class MyReviews extends Component {
  state = {
    listOfReviews: [],
  };
  componentDidMount() {
    this.getMyReviews();
  }

  getMyReviews() {
    BookingService.getReviewsByUserID(this.props.userId).then((reviews) =>
      this.setState({ listOfReviews: reviews })
    );
  }
  render() {

    return (
      <div>
        <h1 className="h1_title">MY REVIEWS</h1>
        {this.state.listOfReviews.length === 0 &&
          "Unfortunately you don't have any review yet."}

        {this.state.listOfReviews.length > 0 &&
          this.state.listOfReviews.map((eachReview, index) => {
            return (
              <div key={eachReview._id}>
                <p>{eachReview.description}</p>
                <p>{eachReview.rating}/5</p>
                <p>{eachReview.author.name}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
export default MyReviews;

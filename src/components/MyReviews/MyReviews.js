import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
import "./MyReviews.css"

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
    console.log(this.state.listOfReviews);
    return (
      <div>
        <h1>My reviews:</h1>
        {this.state.listOfReviews.length === 0 &&
          "Unfortunately you don't have any review yet."}

        {this.state.listOfReviews.length > 0 &&
          this.state.listOfReviews.map((eachReview, index) => {
            return (
              <div key={eachReview._id} className="columns is-mobile">
                <div class="column">
                  <img
                    src={eachReview.author.imageProfile}
                    alt="author_profile"
                    className="profile_img"
                  />
                </div>
                <div class="column">
                  <h3>{eachReview.author.name}</h3>{" "}
                  <p>{eachReview.description}</p> <p>{eachReview.rating}/5</p>
                </div>
                <div class="column">
                  <p>{eachReview.created_at && eachReview.created_at}</p>
                </div>
               
              </div>
            );
          })}
      </div>
    );
  }
}
export default MyReviews;

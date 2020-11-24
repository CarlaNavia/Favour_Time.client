import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
import "./MyReviews.css"
import Rating from "../Rating"

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
    console.log(this.state.listOfReviews && this.state.listOfReviews.rating)
    return (
      <div>
        <h1 className="h1_reviews">MY REVIEWS</h1>
        {this.state.listOfReviews.length === 0 &&
          "Unfortunately you don't have any review yet."}

        {this.state.listOfReviews.length > 0 &&
          this.state.listOfReviews.map((eachReview, index) => {
            return (
              <div key={eachReview._id} className="columns is-mobile border">
              
                <div className="column is-one-fifth-desktop">
                  <img
                    src={eachReview.author.imageProfile}
                    alt="author_profile"
                    className="profile_img"
                  />
                </div>
                <div className="column is-two-thirds-desktop">
                  <p className="author">{eachReview.author.name}</p>{" "}
                  <p className="description">{eachReview.description}</p> 
                </div>
                <div className="column is-one-fifth ">
                <p><Rating rating={eachReview.rating}/></p>
                </div>
               
              </div>
            );
          })}
      </div>
    );
  }
}
export default MyReviews;

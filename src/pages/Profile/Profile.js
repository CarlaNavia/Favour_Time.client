import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import MyBookings from "../../components/MyBookings";
import MyRequests from "../../components/MyRequests";
import MyReviews from "../../components/MyReviews/MyReviews";
import UserDetails from "../../components/UserDetails";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyServices from "../../components/MyServices/MyServices";
import { Link } from "react-router-dom";
import "./Profile.css";
import Rating from "../../components/Rating";

class Profile extends Component {
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    if (this.props.user.review.length === 0) {
      return 0;
    }
    const result = this.props.user.review.reduce(
      (previousReview, currentReview) => ({
        rating: previousReview.rating + currentReview.rating,
      })
    );
    const averageReviews = result.rating / totalReviews;
    return averageReviews;
  }

  getImageProfile() {
    if (this.props.user.imageProfile) {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }

  render() {
    return (
      <div className="container header">
        <div className="columns is-mobile">
          <div className="column is-four-fifths-desktop ">
            <button onClick={this.props.history.goBack}>Back</button>
            <h3>{this.props.user.name}</h3>
            <p>{this.props.user.credits} credits</p>
            <div className="align_buttons">
            <button className="buttons_profile">
              <Link to={`/profile/edit/${this.props.user._id}`}>
                Edit Profile
              </Link>
            </button>
            <button className="buttons_profile">
              <Link to={"/auth/logout"}>Logout</Link>
            </button>
            </div>
          </div>
          <div className="column position_img">
            <img
              src={this.getImageProfile()}
              alt="profile"
              className="profile_img"
            />
            <Rating rating={this.getUserRating()} />
          </div>
        </div>
      
        <div className="container">
          <Tabs>
            <TabList>
              <Tab>
                <img
                  src="../../../booking.png"
                  alt="booking"
                  className="icon"
                />
              </Tab>
              <Tab>
                <img
                  src="../../../request.png"
                  alt="request"
                  className="icon"
                />
              </Tab>
              <Tab>
                <img src="../../../review.png" alt="review" className="icon" />
              </Tab>
              {/* <Tab>
                    <p>My Profile</p>
                  </Tab> */}
              <Tab>
                <img
                  src="../../../services.png"
                  alt="service"
                  className="icon"
                />
              </Tab>
            </TabList>
            <TabPanel>
              <MyBookings userId={this.props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyRequests userId={this.props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyReviews userId={this.props.user._id} />
            </TabPanel>
            {/* <TabPanel>
                  <UserDetails user={this.props.user} />
                </TabPanel> */}
            <TabPanel>
              <MyServices userId={this.props.user._id} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);

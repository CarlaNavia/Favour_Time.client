import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import MyBookings from "../components/MyBookings";
import MyRequests from "../components/MyRequests";
import MyReviews from "../components/MyReviews";
import UserDetails from "../components/UserDetails";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyServices from "../components/MyServices";

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
  rate = () => {
    const blackStar = Math.round(this.getUserRating());
    if (blackStar === 0) {
      return "☆☆☆☆☆";
    }
    if (blackStar === 1) {
      return "★☆☆☆☆";
    }
    if (blackStar === 2) {
      return "★★☆☆☆";
    }
    if (blackStar === 3) {
      return "★★★☆☆";
    }
    if (blackStar === 4) {
      return "★★★★☆";
    }
    if (blackStar === 5) {
      return "★★★★★";
    }
    return blackStar;
  };

  getImageProfile() {
    if (this.props.user.imageProfile) {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }

  render() {
    console.log(this.rate(), "rating");
    return (
      <div>
        <div class="columns is-mobile">
          <div class="column is-three-quarters">
            <h3>{this.props.user.name}</h3>
            <p>{this.props.user.credits} credits</p>
          </div>
          <div class="column">
            <img
              src={this.getImageProfile()}
              alt="profile"
              style={{ width: 50, borderRadius: 50 }}
            />
            <p>{this.rate()}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">First column</div>
        </div>
        <button onClick={this.props.history.goBack}>Back</button>
        <button onClick={this.props.history.goBack}>Back</button>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.credits} credits</p>

        <div class="container">
          <Tabs>
            <TabList>
              <Tab>
                <p>My Bookings</p>
              </Tab>
              <Tab>
                <p>My Requests</p>
              </Tab>
              <Tab>
                <p>My Reviews</p>
              </Tab>
              <Tab>
                <p>My Profile</p>
              </Tab>
              <Tab>
                <p>My Services</p>
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
            <TabPanel>
              <UserDetails user={this.props.user} />
            </TabPanel>
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

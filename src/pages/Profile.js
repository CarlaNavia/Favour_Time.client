import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import MyBookings from "../components/MyBookings";
import MyRequests from "../components/MyRequests";
import MyReviews from "../components/MyReviews";
import UserDetails from "../components/UserDetails";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Profile extends Component {
  getUserRating() {
    const totalReviews = this.props.user.review.length;
    if (this.props.user.review.length == 0) {
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
    if (this.props.user.imageProfile !== "") {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.credits} credits</p>

        <img src={this.getImageProfile()} />
        <p>{this.getUserRating()}/5</p>

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
            <h4>My services panel</h4>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withAuth(Profile);

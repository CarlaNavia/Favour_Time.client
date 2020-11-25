import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import MyBookings from "../../components/bookings/MyBookings";
import MyRequests from "../../components/bookings/MyRequests";
import MyReviews from "../../components/MyReviews/MyReviews";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyServices from "../../components/MyServices/MyServices";
import "./Profile.css";
import HeaderProfile from "../../components/HeaderProfile";

class Profile extends Component {
  render() {
    return (
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />

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

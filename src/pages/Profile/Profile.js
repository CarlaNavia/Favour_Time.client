import React from "react";
import { withAuth } from "../../lib/AuthProvider";
import MyBookings from "../../components/bookings/MyBookings";
import MyRequests from "../../components/bookings/MyRequests";
import MyReviews from "../../components/MyReviews/MyReviews";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import MyServices from "../../components/services/MyServices";
import "./Profile.css";
import HeaderProfile from "../../components/HeaderProfile";

function Profile(props) {
  return (
    <>
      <div className="container header">
        <HeaderProfile history={props.history} user={props.user} />

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
              <MyBookings userId={props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyRequests userId={props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyReviews userId={props.user._id} />
            </TabPanel>

            <TabPanel>
              <MyServices userId={props.user._id} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default withAuth(Profile);

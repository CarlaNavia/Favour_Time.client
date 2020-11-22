import React, { Component } from "react";
import BookingService from "../lib/booking-service";
import ServiceList from "./ServiceList";

class MyServices extends Component {
  state = {
    listOfServices: [],
  };
  componentDidMount() {
    this.getMyServices();
  }

  getMyServices() {
    BookingService.getServicesByUserID(this.props.userId).then((services) =>
      this.setState({ listOfServices: services })
    );
  }

  deleteService = (serviceId) => {
    BookingService.deleteTheService(serviceId)
      .then(() => {
        this.getMyServices()
      });
  }

  render() {
    return (
      <div>
        <h1>My services:</h1>
        {this.state.listOfServices.length === 0 &&
          "Unfortunately you have not any service uploaded yet."}
        {this.state.listOfServices.length > 0 && (
          <ServiceList
            onDelete={this.deleteService}
            services={this.state.listOfServices}
          />
        )}
      </div>
    );
  }
}
export default MyServices;

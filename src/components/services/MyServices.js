import React, { Component } from "react";
import BookingService from "../../lib/booking-service";
<<<<<<< HEAD:src/components/MyServices/MyServices.js
import ServiceList from "../ServiceList/ServiceList";
=======
import ServiceList from "./ServiceList";
>>>>>>> 4a691e3e85fca136d0343f92a67bf5407589497f:src/components/services/MyServices.js

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
    BookingService.deleteTheService(serviceId).then(() => {
      this.getMyServices();
    });
  };

  render() {
    return (
      <div>
        <h1 className="h1_title">MY SERVICES</h1>
        {this.state.listOfServices.length === 0 &&
          "Unfortunately you have not any service uploaded yet."}
        {this.state.listOfServices.length > 0 && (
          <ServiceList
            services={this.state.listOfServices}
            onDelete={this.deleteService}
          />
        )}
      </div>
    );
  }
}
export default MyServices;

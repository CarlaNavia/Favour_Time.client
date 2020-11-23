import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import BookingService from "../lib/booking-service";
import ServiceTypeService from "../lib/serviceType-service";

class EditService extends Component {
  state = {
    currentService: {},
  };
  componentDidMount() {
    this.getTheService()
  }

  getTheService() {
    const { params } = this.props.match;
    ServiceTypeService.getServiceDetail(params.serviceId).then((eachService) =>
      this.setState({ currentService: eachService })
    );
  }

  handleInputChange(event, propertyName) {
    let copyService = this.state.currentService;
    copyService[propertyName] = event.target.value;
    this.setState({ currentService: copyService });
  }

  handleSubmit(event) {
    event.preventDefault();
    BookingService.editTheService(this.state.currentService._id, this.state.currentService).then(() => {
      this.props.history.push("/profile");
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Credits:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.credits}
            onChange={(e) => this.handleInputChange(e,"credits")}
          />
          <label>Service Name:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.serviceName}
            onChange={(e) => this.handleInputChange(e, "serviceName")}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default withAuth(EditService);

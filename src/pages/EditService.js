import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import BookingService from "../lib/booking-service";
import ServiceTypeService from "../lib/serviceType-service";


class EditService extends Component {
  state = {
    currentService: {},
  };
  componentDidMount() {
    this.getTheService();
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
  handleImageService(event) {
    const files = event.target.files[0];
    ServiceTypeService.handleUpload(files).then((data) => {
      this.setState({ currentService: data });
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    BookingService.editTheService(
      this.state.currentService._id,
      this.state.currentService
    ).then(() => {
      this.props.history.push("/profile");
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Service Name:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.serviceName}
            onChange={(e) => this.handleInputChange(e, "serviceName")}
          />
          <label>Description:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          />
            <label>Image:</label>
          <input
            type="file"
            defaultValue={this.state.currentService.imageService}
            onChange={(e) => this.handleImageService(e)}
          />
          <label>Available Time:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.availableTime}
            onChange={(e) => this.handleInputChange(e, "availableTime")}
          />
          <label>City:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.cityToBeHeld}
            onChange={(e) => this.handleInputChange(e, "cityToBeHeld")}
          />
          <label>Address:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.addressToBeHeld}
            onChange={(e) => this.handleInputChange(e, "addressToBeHeld")}
          />
          <label>Street:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.streetNumberToBeHeld}
            onChange={(e) => this.handleInputChange(e, "streetNumberToBeHeld")}
          />
          <label>Credits:</label>
          <input
            type="text"
            defaultValue={this.state.currentService.credits}
            onChange={(e) => this.handleInputChange(e, "credits")}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default withAuth(EditService);

import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import BookingService from "../lib/booking-service";
import ServiceTypeService from "../lib/serviceType-service";
import HeaderProfile from "../components/HeaderProfile";
import "./Profile/Profile.css";

class EditService extends Component {
  state = {
    currentService: {},
    serviceTypeSelect: [],
  };
  componentDidMount() {
    this.getTheService();
    this.allServicesSelect();
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
    ServiceTypeService.handleUpload(files,  this.state.currentService._id).then((data) => {
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
  allServicesSelect = () => {
    ServiceTypeService.getAllServiceType()
      .then((responseFromApi) => {
        this.setState({
          serviceTypeSelect: responseFromApi,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log(this.state.currentService, "map")
    return (
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />
        <h1 className="h1_title ">EDIT MY SERVICE</h1>
        <form className="align_form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Service Name:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.serviceName}
            onChange={(e) => this.handleInputChange(e, "serviceName")}
          />
          <br />
          <label for="serviceTypeID">Service Type:</label>
          <select
          className="form_profile"
            name="serviceTypeID"
            value={this.state.currentService.serviceTypeID}
            onChange={(e) => this.handleInputChange(e)}
            required
          >
            <option value=""></option>
            {this.state.serviceTypeSelect.map((type) => {
              return (
                <option key={type._id} value={type._id}>
                  {type.serviceName}
                </option>
              );
            })}
          </select>
          <br />
          <label>Description:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          />
          <br />
          <label>Image:</label>
          <input
            className="form_profile"
            type="file"
            defaultValue={this.state.currentService.imageService}
            onChange={(e) => this.handleImageService(e)}
          />
          <br />
          <label>Available Time:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.availableTime}
            onChange={(e) => this.handleInputChange(e, "availableTime")}
          />
          <br />
          <label>City:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.cityToBeHeld}
            onChange={(e) => this.handleInputChange(e, "cityToBeHeld")}
          />
          <br />
          <label>Address:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.addressToBeHeld}
            onChange={(e) => this.handleInputChange(e, "addressToBeHeld")}
          />
          <br />
          <label>Credits:</label>
          <input
            className="form_profile"
            type="text"
            defaultValue={this.state.currentService.credits}
            onChange={(e) => this.handleInputChange(e, "credits")}
          />
          <button className="buttons_profile">Save</button>  <br />
        </form>
      </div>
    );
  }
}
export default withAuth(EditService);

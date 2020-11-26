import React, { Component } from "react";
import ServiceTypeService from "../lib/serviceType-service";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/navbar/Navbar";
import BookingService from "../lib/booking-service";
import "./Services.css";

class ServiceDetails extends Component {
  state = {
    serviceDetail: {},
    owner: {},
    date: "",
    time: "",
    extraInformation: "",
    imageMap: "",
  };

  componentDidMount() {
    this.serviceDetail();
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  serviceDetail = () => {
    const { params } = this.props.match;
    ServiceTypeService.getServiceDetail(params.serviceID)
      .then((responseFromApi) => {
        this.setState({
          serviceDetail: responseFromApi,
          owner: responseFromApi.owner,
          imageMap: `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=4lDY5DXh7ZW1sLWz2IwQLWnf2vXf_GibFkqD9gErzu0
                                &co=Spain
                                &ci=${responseFromApi.cityToBeHeld}
                                &s=${responseFromApi.addressToBeHeld}
                                &n=${responseFromApi.streetNumberToBeHeld}
                                &z=17
                                &h=200
                                &ppi=250
                                &w=500
                                &f=1`,
        });
      })
      .catch((error) => console.log(error));
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { params } = this.props.match;
    const date = new Date(this.state.date).toDateString();
    const time = this.state.time;
    const extraInformation = this.state.extraInformation;

    let today = new Date();
    let selected = new Date(date);
    if (selected < today) {
      console.log("You cannot select dates in the past");
    }

    try {
      await BookingService.newBooking(params.serviceID, {
        date,
        time,
        extraInformation,
      });
      this.setState({
        date: "",
        time: "",
        extraInformation: "",
      });
    } catch (error) {
      console.log("Error while adding the service: ", error);
    }
  };
  getImageProfile() {
    if (this.state.serviceDetail.imageService !== "") {
      return this.state.serviceDetail.imageService;
    } else {
      return "/default-user-image.png";
    }
  }

  render() {
    return (
      <div className="container header" key={this.state.serviceDetail._id}>
        <Navbar />
        <h1 className="h1_title ">LET'S BOOK THIS SERVICE!</h1>
        <div className="columns is-flex-desktop-only">
          <div className="column is-one-third  center_text">
            <p>
              <strong>Service Name:</strong>
              {this.state.serviceDetail.serviceName}
            </p>
            <p>
              <strong>Description: </strong>
              {this.state.serviceDetail.description}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {this.state.serviceDetail.availableTime}
            </p>
            <p>
              <strong>Address:</strong>
              {this.state.serviceDetail.addressToBeHeld}
            </p>
            <p>
              <strong>Credits:</strong> {this.state.serviceDetail.credits}
            </p>
            <p>
              <strong>Owner of the service: </strong>
              {this.state.owner.name}
            </p>
            <img
              src={this.getImageProfile()}
              alt="service"
              style={{ width: 100 }}
            />
          </div>
          <br />
      
        <div className="column">
          <form onSubmit={this.handleFormSubmit} className="align_form">
            <label>Date:</label>

            <input
              className="form_profile"
              type="date"
              name="date"
              value={this.state.date}
              onChange={(e) => this.handleChange(e)}
            />
            <br />

            <label>Time:</label>

            <input
              className="form_profile"
              type="time"
              name="time"
              value={this.state.time}
              onChange={(e) => this.handleChange(e)}
            />
            <br />

            <label>Extra Information:</label>

            <textarea
              className="form_profile"
              type="text"
              name="extraInformation"
              value={this.state.extraInformation}
              onChange={(e) => this.handleChange(e)}
            />
            <br />

            <input className="buttons_profile" type="submit" value="Submit" />
          </form>
        </div>
        <div className="column">
          <div className="map">
            <img 
              className="align_map"
              src={this.state.imageMap}
              alt="Location of service"
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withAuth(ServiceDetails);

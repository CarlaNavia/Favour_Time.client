import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import BookingService from "../lib/booking-service";
import ServiceTypeService from "../lib/serviceType-service";
import HeaderProfile from "../components/HeaderProfile";
import "./Profile/Profile.css";
import { Link } from "react-router-dom";

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
    var pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
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
    return (
      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />
        <Link to={"/profile"}>
          <img
            className="icons"
            src="../../002-flecha-izquierda.png"
            alt="back"
          />
        </Link>
        <h1 className="h1_title ">EDIT MY SERVICE</h1>
        <form className="align_form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Service Name:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.serviceName}
            onChange={(e) => this.handleInputChange(e, "serviceName")}
          />
          <br />
          <label htmlFor="serviceTypeID">Service Type:</label>
          <select
            className="form_profile"
            name="serviceTypeID"
            value={
              this.state.currentService.serviceType &&
              this.state.currentService.serviceType._id
            }
            onChange={(e) => this.handleInputChange(e, "serviceType")}
            required
          >
            <option value=""></option>
            {this.state.serviceTypeSelect.map((type) => {
              return (
                <option
                  key={type._id}
                  value={type._id}
                  selected={
                    this.state.currentService.serviceType &&
                    this.state.currentService.serviceType._id === type._id
                  }
                >
                  {type.serviceName}
                </option>
              );
            })}
          </select>
     
          <label>Description:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          />
          <label>Image:</label>
          <label htmlFor="file-upload" className="uploadEdit">
              Upload photo
            </label>
            <input id="file-upload"
              type="file"
              defaultValue={this.state.currentService.imageService}
              onChange={(e) => this.handleImageService(e)}
              className="uploadEdit"
              style={{ display: 'none' }}
            />
            <div id="info"></div>

          {/* <input
            className="input_Form"
            type="file"
            defaultValue={this.state.currentService.imageService}
            onChange={(e) => this.handleImageService(e)}
          /> */}

          <label>Available Time:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.availableTime}
            onChange={(e) => this.handleInputChange(e, "availableTime")}
          />
         
          <label>City:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.cityToBeHeld}
            onChange={(e) => this.handleInputChange(e, "cityToBeHeld")}
          />
          
          <label>Address:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.addressToBeHeld}
            onChange={(e) => this.handleInputChange(e, "addressToBeHeld")}
          />
      
          <label>Credits:</label>
          <input
            className="input_Form"
            type="text"
            defaultValue={this.state.currentService.credits}
            onChange={(e) => this.handleInputChange(e, "credits")}
          />
          <button className="buttons_profile">Save</button>
        </form>
      </div>
    );
  }
}
export default withAuth(EditService);

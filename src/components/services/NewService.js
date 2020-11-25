import React, { Component } from "react";
import ServiceTypeService from "../../lib/serviceType-service";
import { withAuth } from "../../lib/AuthProvider";
import './newService.css'
import { Button } from 'react-bootstrap';

class NewService extends Component {
  state = {
    serviceName: "",
    imageService: "",
    description: "",
    serviceTypeID: "",
    availableTime: "",
    cityToBeHeld: "",
    addressToBeHeld: "",
    streetNumberToBeHeld: "",
    credits: "",
    serviceTypeSelect: [],
    imgService: "",
  };
  componentDidMount() {
    this.allServicesSelect();
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = async (e) => {
    const files = e.target.files[0];
    this.setState({ imgService: files });
  };

  allServicesSelect = () => {
    ServiceTypeService.getAllServiceType()
      .then((responseFromApi) => {
        this.setState({
          serviceTypeSelect: responseFromApi,
        });
      })
      .catch((error) => console.log(error));
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newServiceResponse = await ServiceTypeService.newService(
        this.state
      );
      await ServiceTypeService.handleUpload(
        this.state.imgService,
        newServiceResponse._id
      );
      this.setState({
        serviceName: "",
        imageService: "",
        description: "",
        serviceTypeID: "",
        availableTime: "",
        cityToBeHeld: "",
        addressToBeHeld: "",
        streetNumberToBeHeld: "",
        credits: "",
        imgService: "",
      });
      this.props.form({ showForm: !this.state.showForm });
    } catch (error) {
      console.log("Error while adding the service: ", error);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>Service Name:</label>
          <br />
          <input
            type="text"
            name="serviceName"
            value={this.state.serviceName}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />

          <label for="serviceTypeID">Category:</label>
          <br />
          <div class="select">
          <select name="serviceTypeID" value={this.state.serviceTypeID} onChange={(e) => this.handleChange(e)} required>
            <option value=""></option>
            {this.state.serviceTypeSelect.map((type) => {
              return (
                <option key={type._id} value={type._id}>
                  {type.serviceName}
                </option>
              );
            })}
          </select>
          </div>

          <br />

          <label>Description:</label>
          <br />
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />

          <label>City:</label>
          <br />
          <input
            type="text"
            name="cityToBeHeld"
            value={this.state.cityToBeHeld}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />

          <label>Address:</label>
          <br />
          <input
            type="text"
            name="addressToBeHeld"
            value={this.state.addressToBeHeld}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />

          <label>Street Number:</label>
          <br />
          <input
            type="text"
            name="streetNumberToBeHeld"
            value={this.state.streetNumberToBeHeld}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />

          <label for="availableTime">Available Time:</label>
          <br />
          <div class="select">
          <select name="availableTime" value={this.state.availableTime} onChange={(e) => this.handleChange(e)} required>
            <option value=""></option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="night">Night</option>
          </select>
          </div>
          
          <br />

          <label>Image:</label>
          <br />
          <input type="file" onChange={(e) => this.handleFileUpload(e)} className="upload" />
          <br />

          <label>Credits:</label>
          <br />
          <input
            type="number"
            name="credits"
            value={this.state.credits}
            onChange={(e) => this.handleChange(e)}
            required
            className="inputForm"
          />
          <br />
          <Button variant="link" size="lg">
            <input type="submit" value="Submit" className="inputSubmit" />
          </Button>
        </form>
      </>
    );
  }
}

export default withAuth(NewService);

import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { withAuth } from "../lib/AuthProvider";

class NewService extends Component {

    state = {
        serviceName: '',
        imageService: '',
        description: '',
        serviceTypeID: '',
        availableTime: '',
        addressToBeHeld:'',
        credits: '',
        serviceTypeSelect: []
      };
      componentDidMount() {
        this.allServicesSelect();
      }

      handleChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value})
      };
  
      handleFileUpload = async (e) => {
          try {
            const files = e.target.files[0];
            const res = await ServiceTypeService.handleUpload(files);    
            this.setState({ imageService: res.secure_url });
          } catch (error) {
            console.log("Error while uploading the file: ", error);
          }
        };

      allServicesSelect = () => {
          ServiceTypeService.getAllServices()
          .then(responseFromApi => {
            this.setState({
              serviceTypeSelect: responseFromApi
              });
          })
          .catch(error => console.log(error));
      };


    handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          await ServiceTypeService.newService(this.state);
          this.setState({
            serviceName: '',
            imageService: '',
            description: '',
            serviceTypeID: '',
            availableTime: '',
            addressToBeHeld:'',
            credits: '',
        });
        } catch (error) {
            console.log("Error while adding the service: ", error);
        }
      };


    render() {
      return (
          <>
            <form onSubmit={this.handleFormSubmit}>
                <label>Service Name:</label><br/>
                <input type="text" name="serviceName" value={this.state.serviceName} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Category:</label><br/>
                {/* <input type="text" name="serviceType" value={this.state.serviceType} onChange={(e) => this.handleChange(e)}/><br/> */}
                <select name="serviceTypeID" value={this.state.serviceTypeID} onChange={(e) => this.handleChange(e)}>
                {this.state.serviceTypeSelect.map((type) => {
                  return (
                        <option key={type._id} value={type._id}>{type.serviceName}</option>
                  )
                })}
                </select><br/>

                <label>Description:</label><br/>
                <textarea type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/><br/>
                
                <label>Address To Be Held:</label><br/>
                <input type="text" name="addressToBeHeld" value={this.state.addressToBeHeld} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Available Time:</label><br/>
                <select name="availableTime" value={this.state.availableTime} onChange={(e) => this.handleChange(e)}>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                </select><br/>

                <label>Image:</label><br/>
                <input type="file" onChange={(e) => this.handleFileUpload(e)}/><br/>
                
                <label>Credits:</label><br/>
                <input type="number" name="credits" value={this.state.credits} onChange={(e) => this.handleChange(e)}/><br/>

                <input type="submit" value="Submit"/>
            </form>
          </>
    );
    }
  }
  
  export default withAuth(NewService);
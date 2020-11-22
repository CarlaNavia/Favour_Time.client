import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { withAuth } from "../lib/AuthProvider";

class NewService extends Component {

    state = {
        serviceName: '',
        imageService: '',
        description: '',
        serviceType: '',
        availableTime: 'morning',
        addressToBeHeld:'',
        credits: 0,
      };
      handleChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value})
      };
  
      handleFileUpload = async (e) => {
        //   const uploadData = new FormData();
        //   uploadData.append("imageService", e.target.files[0]);
          try {
            const files = e.target.files[0];
            const res = await ServiceTypeService.handleUpload(files);    
            this.setState({ imageService: res.secure_url });
          } catch (error) {
            console.log("Error while uploading the file: ", error);
          }
        };

    handleFormSubmit = (event) => {
      event.preventDefault();

        ServiceTypeService.newService(this.state)
        .then(() => {
            this.setState({
                serviceName: '',
                imageService: '',
                description: '',
                serviceType: '',
                availableTime: 'morning',
                addressToBeHeld:'',
                credits: 0,
            });
        })
        .catch(error => console.log(error));
    };
  
    render() {
    
      return (
          <>
            <form onSubmit={this.handleFormSubmit}>
                <label>Service Name:</label><br/>
                <input type="text" name="serviceName" value={this.state.serviceName} onChange={(e) => this.handleChange(e)}/><br/>

                <label>Category:</label><br/>
                <input type="text" name="serviceType" value={this.state.serviceType} onChange={(e) => this.handleChange(e)}/><br/>
                
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
                <input type="file" name="imageService" value={this.state.imageService} onChange={(e) => this.handleFileUpload(e)}/><br/>
                
                <label>Credits:</label><br/>
                <input type="number" name="credits" value={this.state.credits} onChange={(e) => this.handleChange(e)}/><br/>

                <input type="submit" value="Submit"/>
            </form>
          </>
    );
    }
  }
  
  export default withAuth(NewService);
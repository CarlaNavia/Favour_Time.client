import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { withAuth } from "../lib/AuthProvider";
import Navbar from '../components/Navbar';
import BookingService from '../lib/booking-service';

class ServiceDetails extends Component {
    state = {
        serviceDetail: {},
        owner: {},
        date: '',
        time: '',
        extraInformation: '',
    }

    componentDidMount() {
        this.serviceDetail();
    }

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value})
    };

    serviceDetail = () => {
        const { params } = this.props.match;
        ServiceTypeService.getServiceDetail(params.serviceID)
        .then(responseFromApi => {
            this.setState({
                serviceDetail: responseFromApi,
                owner: responseFromApi.owner
            });
        })
        .catch(error => console.log(error));
      };



    handleFormSubmit = async (e) => {
            e.preventDefault();
            const { params } = this.props.match;
            const date = new Date(this.state.date).toDateString();
            const time = this.state.time;
            const extraInformation = this.state.extraInformation;

            try {
            const res = await BookingService.newBooking(params.serviceID, {date, time, extraInformation});
                this.setState({
                    date: '',
                    time: '',
                    extraInformation: '',
                });
            } catch (error) {
                console.log("Error while adding the service: ", error);
            }
        };
   


    render (){
        return( 
        <>
        <Navbar/>
            <div key={this.state.serviceDetail._id}>
                    <h3>Service Name:{this.state.serviceDetail.serviceName}</h3> 
                    <h3>Description: {this.state.serviceDetail.description}</h3> 
                    <h3>Availability: {this.state.serviceDetail.availableTime}</h3> 
                    <h3>address:{this.state.serviceDetail.addressToBeHeld}</h3> 
                    <h3>credits: {this.state.serviceDetail.credits}</h3> 
                    <h3>Owner of the service: {this.state.owner.name}</h3>
            </div>
 
            <form onSubmit={this.handleFormSubmit}>
                    <label>Date:</label><br/>
                    <input type="date" name="date" value={this.state.date} onChange={(e) => this.handleChange(e)}/><br/>
                    
                    <label>Time:</label><br/>
                    <input type="time" name="time" value={this.state.time} onChange={(e) => this.handleChange(e)}/><br/>

                    <label>Extra Information:</label><br/>
                    <textarea type="text" name="extraInformation" value={this.state.extraInformation} onChange={(e) => this.handleChange(e)}/><br/>

                    <input type="submit" value="Submit"/>
            </form>
        </>
        );
    }
}

export default withAuth(ServiceDetails);
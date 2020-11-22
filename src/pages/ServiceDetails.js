import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { withAuth } from "../lib/AuthProvider";
import Navbar from '../components/Navbar';
import BookingService from '../lib/booking-service';

class ServiceDetails extends Component {
    state = {
        serviceDetail: {},
        date: '',
        time: '',
        extraInformation: '',
    }
    
    componentDidMount() {
        this.serviceDetail();
    }

    serviceDetail = () => {
        const { params } = this.props.match;
        ServiceTypeService.getServiceDetail(params.serviceID)
        .then(responseFromApi => {
            this.setState({
                serviceDetail: responseFromApi
            });
        })
        .catch(error => console.log(error));
      };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const date = this.state.date;
        const time = this.state.time;
        const extraInformation = this.state.extraInformation;
        const { params } = this.props.match;

        BookingService.newBooking(params.serviceID , {date, time, extraInformation})
        .then(() => {
            this.setState({
            date: '',
            time: '',
            extraInformation: '',
            });
        })
        .catch(error => console.log(error));
    };

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value})
    };

    render (){
        // console.log(this.state.serviceDetail, 'detail')
        return( 
        <>
        <Navbar/>
            <div key={this.state.serviceDetail._id}>
                    <h3>{this.state.serviceDetail.serviceName}</h3> 
                    <h3>{this.state.serviceDetail.description}</h3> 
                    <h3>{this.state.serviceDetail.availableTime}</h3> 
                    <h3>{this.state.serviceDetail.addressToBeHeld}</h3> 
                    <h3>{this.state.serviceDetail.credits}</h3> 
                    {/* <h3>{this.state.serviceDetail.owner}</h3>  */}
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
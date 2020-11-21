import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class MyRequests extends Component {
    state = {
        listOfRequests: [],
    }
  componentDidMount() {
    this.getMyRequests();
  }

  getMyRequests() {
    BookingService.getRequestsByUserID(this.props.userId)
   
    .then((requests) => 
    this.setState({listOfRequests:requests}))
  }

  renderRequests() {
      return(
          <ul>{this.state.listOfRequests.map((eachRequest, index) => {
              return <li>{eachRequest.service.serviceName}</li>
          })}

          </ul>
      )
  }

  render() {
    return (
      <div>
        <h1>My requests:</h1>
        { this.state.listOfRequests.length === 0 && "Unfortunately you have not any request yet."}
        { this.state.listOfRequests.length > 0 && this.renderRequests()}
      </div>
    );
  }
}

export default MyRequests;

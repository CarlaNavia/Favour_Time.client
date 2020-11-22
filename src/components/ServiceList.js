import React, { Component } from "react";
import BookingService from "../lib/booking-service";

class ServiceList extends Component {

 

  render() {
    return (
      <ul>
        {this.props.services.map((eachService, index) => {
          return (
            <li key={eachService._id}>
              <p>Name:{eachService.serviceName}</p>
              <p>Description:{eachService.description}</p>
              <p>Credits:{eachService.credits}</p>
              <button onClick={() => this.props.onDelete(eachService._id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ServiceList;

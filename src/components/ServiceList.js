import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              

              <Link to={`/service/edit/${eachService._id}`} >
            Edit
        </Link>
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

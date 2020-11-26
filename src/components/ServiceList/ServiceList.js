import React, { Component } from "react";

import "./ServiceList.css";
import ServiceListItem from "./ServiceListItem"

class ServiceList extends Component {
  render() {
    return (
      <ul>
        {this.props.services.map((eachService, index) => {
          return (
            <ServiceListItem
              key={index}
              oneService={eachService}
              isOwner={this.props.isOwner}
              onDelete={this.props.onDelete}
              showMoreButton={this.props.showMoreButton}
            />
          );
        })}
      </ul>
    );
  }
}

export default ServiceList;

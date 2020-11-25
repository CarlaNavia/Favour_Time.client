import React, { Component } from "react";
import ServiceTypeService from "../lib/serviceType-service";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ServiceList from "../components/ServiceList/ServiceList";
import "./Services.css";
import Icon from "../components/services/Icon";

class Services extends Component {
  state = {
    servicesType: {},
    services: [],
  };

  componentDidMount() {
    this.allServicesSameType();
  }

  allServicesSameType = () => {
    const { params } = this.props.match;
    ServiceTypeService.getAllServicesSameType(params.categoryID)
      .then((responseFromApi) => {
        this.setState({
          servicesType: responseFromApi,
          services: responseFromApi.services,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <Navbar />

        <div className="container margin_header">
          <div className="serviceTypeName title iconTitle">
            <Icon code={this.state.servicesType.iconCode} />
            <h1 className="h1_title">{this.state.servicesType.serviceName} </h1>
          </div>
          {this.state.services.length > 0 && (
            <ServiceList showMoreButton services={this.state.services} />
          )}
        </div>
      </>
    );
  }
}

export default Services;

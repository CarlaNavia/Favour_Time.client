import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ServiceList.css";

class ServiceList extends Component {
  render() {
    return (
      <ul>
        {this.props.services.map((eachService, index) => {
          return (
            <div class="columns is-mobile border">
              <div class="column">
                <img
                  src={eachService.imageService}
                  alt="service"
                  className="service_img"
                />
              </div>
              <div class="column is-one-fifth">
                <p className="name">{eachService.serviceName}</p>
              </div>

              <div class="column is-two-fifths-desktop">
                <p className="description">{eachService.description}</p>
                <p className="credits">{eachService.credits} credits</p>
              </div>
              <div class="column is-one-fifth desktop">
                <Link to={`/service/edit/${eachService._id}`}>
                  <img className="icons" src="../../../edit.png" alt="edit" />
                </Link>
                <br/>
                <button
                  className="iconDelete"
                  onClick={() => this.props.onDelete(eachService._id)}
                >
                  <img className="icons" src="../../../delete.png" alt="delete" />
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ServiceList;

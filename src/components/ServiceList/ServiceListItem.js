import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../pages/Profile/Profile.css"

class ServiceListItem extends Component {
  render() {
    return (
      <div className="columns is-mobile border" key={this.props.oneService._id}>
        <div className="column is-hidden-mobile">
          <img
            src={this.props.oneService.imageService}
            alt="service"
            className="service_img"
          />
        </div>
        <div className="column">
          <p className="name">{this.props.oneService.serviceName}</p>
        </div>

        <div className="column is-two-fifths-desktop">
          <p className="description">{this.props.oneService.description}</p>
          <p className="credits">{this.props.oneService.credits} credits</p>
        </div>
        <div className="column is-one-fifth desktop">
          {this.props.isOwner && (
            <Link to={`/service/edit/${this.props.oneService._id}`}>
              <img className="icons" src="../../../edit.png" alt="edit" />
            </Link>
          )}
          <br />
          {this.props.isOwner && (
            <button
              className="iconDelete"
              onClick={() => this.props.onDelete(this.props.oneService._id)}
            >
              <img className="icons" src="../../../delete.png" alt="delete" />
            </button>
          )}
          {!this.props.isOwner && this.props.showMoreButton && (
            <Link to={`/services/${this.props.oneService._id}`} className="buttons_profile">More </Link>
          )}
        </div>
      </div>
    );
  }
}
export default ServiceListItem;

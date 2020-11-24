import React, { Component } from "react";

class Rating extends Component {
  renderRating = () => {
    const blackStar = Math.round(this.props.rating);
    if (blackStar === 0) {
      return "☆☆☆☆☆";
    }
    if (blackStar === 1) {
      return "★☆☆☆☆";
    }
    if (blackStar === 2) {
      return "★★☆☆☆";
    }
    if (blackStar === 3) {
      return "★★★☆☆";
    }
    if (blackStar === 4) {
      return "★★★★☆";
    }
    if (blackStar === 5) {
      return "★★★★★";
    }
    return blackStar;
  };

  render() {
    return <div>{this.renderRating()}</div>;
  }
}
export default Rating;

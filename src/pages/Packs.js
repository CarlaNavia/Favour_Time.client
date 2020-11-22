import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";

class Packs extends Component {
 

  addCredits(credits) {
    UserService.buyCredits(credits).then((data) => {
    }).then(() => {
        window.location="/profile";
      });
  }
  render() {
    return (
      <div>
        <div onClick={() => this.addCredits(30)}>30 credits</div>
        <div onClick={() => this.addCredits(60)}>60 credits</div>
        <div onClick={() => this.addCredits(120)}>120 credits</div>
      </div>
    );
  }
}

export default withAuth(Packs);

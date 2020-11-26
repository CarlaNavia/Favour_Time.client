import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";
import "./packs.css";
import { Card, Button } from "react-bootstrap";
import RandomServices from "../components/services/RandomServices";
import NavbarInfo from "../components/navbar/NavbarInfo";

class Packs extends Component {
  addCredits(credits) {
    UserService.buyCredits(credits)
      .then((data) => {})
      .then(() => {
        window.location = "/profile";
      });
  }
  render() {
    return (
      <>
        <Navbar/>
       <div className="navbarContainer">
       <NavbarInfo/>
       </div>
        <div className="titleCredits">
       
          <div className="h1Container">
            <h1>No time? Don't worry, here you can earn it.</h1>
          </div>
        </div>
        <div className="boxCredits">
          <Card style={{ width: "18rem" }} className="cardPrice">
            <Card.Body>
              <Card.Title className="titlePrice">30 CREDITS</Card.Title>
              <Card.Text className="textPrice">
                The best option to be able to try FavTime and access some of the
                most requested services. Here you will find an infinity of ideal
                services for every occasion.
              </Card.Text>
              <div className="buttonBuy">
                <Button variant="outline-danger">
                  <div onClick={() => this.addCredits(30)}>BUY TIME</div>
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="cardPrice">
            <Card.Body>
              <div className="titlePrice">
                <Card.Title>60 CREDITS</Card.Title>
              </div>
              <Card.Text>
                This is your option if what you need is to give yourself some
                time to disconnect and you don't know how to do it. You won't
                regret it, we promise!
              </Card.Text>
              <div className="buttonBuy">
                <Button variant="outline-danger">
                  <div onClick={() => this.addCredits(60)}>BUY TIME</div>
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="cardPrice">
            <Card.Body>
              <div className="titlePrice">
                <Card.Title>120 CREDITS</Card.Title>
              </div>
              <Card.Text>
                With this package you can access all the premium services of the
                platform. It is the perfect way to learn a new activity, you
                will not be disappointed!
              </Card.Text>
              <div className="buttonBuy">
                <Button variant="outline-danger">
                  <div onClick={() => this.addCredits(120)}>BUY TIME</div>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="secondSection">
          <div className="randomContainer">
            <RandomServices />
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(Packs);

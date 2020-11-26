import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import { withAuth } from "../lib/AuthProvider";
import UserService from "../lib/user-service";
import './packs.css'
import { Card, Button } from 'react-bootstrap';
import RandomServices from '../components/services/RandomServices';

class Packs extends Component {
 

  addCredits(credits) {
    UserService.buyCredits(credits).then((data) => {
    }).then(() => {
        window.location="/profile";
      });
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="titleCredits">
        <div className="h1Container">
          <h1>No time? Don't worry here you can save some time.</h1>
        </div>
      </div>
      <div className="boxCredits">
        <Card style={{ width: '18rem' }} className="cardPrice">
        <Card.Body >
          <Card.Title className="titlePrice">30 CREDITS</Card.Title>
          <Card.Text className="textPrice">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <div className="buttonBuy">
            <Button variant="outline-danger"><div onClick={() => this.addCredits(30)}>BUY TIME</div></Button>
          </div>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="cardPrice">
        <Card.Body>
        <div className="titlePrice">
          <Card.Title>60 CREDITS</Card.Title>
        </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <div className="buttonBuy">
            <Button variant="outline-danger"><div onClick={() => this.addCredits(60)}>BUY TIME</div></Button>
          </div>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="cardPrice">
        <Card.Body>
        <div className="titlePrice">
          <Card.Title>120 CREDITS</Card.Title>
        </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <div className="buttonBuy">
           <Button variant="outline-danger"><div onClick={() => this.addCredits(120)}>BUY TIME</div></Button>
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

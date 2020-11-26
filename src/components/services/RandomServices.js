import React, { Component } from "react";
import ServiceTypeService from "../../lib/serviceType-service";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./serviceType.css";

class RandomServices extends Component {
  state = {
    randomServices: [],
  };

  componentDidMount() {
    this.allServices();
  }

  allServices = () => {
    ServiceTypeService.getAllServices()
      .then((responseFromApi) => {
        this.setState({
          randomServices: responseFromApi,
        });
      })
      .catch((error) => console.log(error));
  };

  randomServices = () => {
    const random = this.state.randomServices.sort(() => {
      return Math.random() - 0.5;
    });
    return random;
  };

  render() {
    this.randomServices();

    return (
      <>
        {this.state.randomServices
          .map((random) => {
            return (
              <Card
                style={{ width: "18rem" }}
                key={random._id}
                className="cardRandom"
              >
                <Link to={`/services/${random._id}`}>
                  <Card.Img
                    className="align_photos"
                    variant="top"
                    src={random.imageService}
                  />
                  <Card.Body>
                    <Card.Title>{random.serviceName}</Card.Title>
                    <Card.Text>
                      {random.description}
                      <br />
                      {random.credits}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            );
          })
          .slice(0, 4)}
      </>
    );
  }
}
export default RandomServices;

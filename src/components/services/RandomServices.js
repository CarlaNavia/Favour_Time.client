import React, { Component } from 'react';
import ServiceTypeService from '../../lib/serviceType-service';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

class RandomServices extends Component {
    state = { 
      randomServices: [],
    }

    componentDidMount() {
        this.allServices();
    }

    allServices = () => {
        ServiceTypeService.getAllServices()
        .then(responseFromApi => {
          this.setState({
              randomServices: responseFromApi 
            })
        })
        .catch(error => console.log(error));
    }

    randomServices = () => {
        const random = this.state.randomServices.sort(() => {
            return Math.random() - 0.5
        })
        return random
    }

    render(){
        this.randomServices()

        return(
            <>
            {this.state.randomServices.map((random)=> {
                return(
                    <Link to={`/services/${random._id}`}>
                    <Card style={{ width: '18rem' }} key={random._id}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{random.serviceName}</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Link>
                )
            }).slice(0,5)}
            </>
        )
    }
}
export default RandomServices


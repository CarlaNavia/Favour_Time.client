import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { Link } from "react-router-dom";

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
                    <div key={random._id}>
                        <Link to={`/services/${random._id}`}>
                            {random.serviceName}
                        </Link>
                    </div>
                )
            }).slice(0,5)}
            </>
        )
    }
}
export default RandomServices
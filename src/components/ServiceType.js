import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import routes from '../lib/auth-service';
import { Link } from "react-router-dom";

class ServiceType extends Component {

    state= {
        serviceType: [],
    }

    allServices = () => {
        routes.getAllServices()
        .then(responseFromApi => {
          this.setState({
            serviceType: responseFromApi
            });
        })
        .catch(error => console.log(error));
    };

    componentDidMount() {
    this.allServices();
    }

 
   render(){
    return(
        <div>
            {this.state.serviceType.map((type) => {
                return (
                    <div key={type._id}>
                        <Link to={`/servicetype/${type._id}`}>
                            <h3>{type.serviceName}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
   }
    
}
export default withAuth(ServiceType);

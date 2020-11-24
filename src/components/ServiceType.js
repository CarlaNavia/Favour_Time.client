import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import ServiceTypeService from '../lib/serviceType-service';
import { Link } from "react-router-dom";

class ServiceType extends Component {
    
    state= {
        serviceType: [],
    }

    allServiceType = () => {
        ServiceTypeService.getAllServiceType()
        .then(responseFromApi => {
          this.setState({
            serviceType: responseFromApi
            });
        })
        .catch(error => console.log(error));
    };

    componentDidMount() {
    this.allServiceType();
    }

 
   render(){
    return(
        <div className="wrapper">
            {this.state.serviceType.map((type) => {
                return (
                    <div className="boxCategory" key={type._id}>
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

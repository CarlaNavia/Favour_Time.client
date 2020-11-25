import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';

class Services extends Component {
    state = {
        servicesType: {},
        services: []
    }
    
    componentDidMount() {
        this.allServicesSameType();
    }

    allServicesSameType = () => {
        const { params } = this.props.match;
        ServiceTypeService.getAllServicesSameType(params.categoryID)
        .then(responseFromApi => {
            this.setState({
              servicesType: responseFromApi,
              services: responseFromApi.services
            });
            
        })
        .catch(error => console.log(error));
      };

    render (){

        return( 
        <>
        <Navbar/>
        <div>
            {this.state.services.length > 0 && this.state.services.map((service) => {
                return (
                    <div key={service._id}>
                    <Link to={`/services/${service._id}`}>
                            <h3>{service.serviceName}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
        </>
        );
    }
}

export default Services;
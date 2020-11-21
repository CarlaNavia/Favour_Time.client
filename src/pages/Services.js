import React, { Component } from 'react';
import routes from '../lib/auth-service';

class Services extends Component {
    state = {
        servicesType: {},
        services: []
    }
    
    componentDidMount() {
        this.getAllServicesSameType();
    }

    getAllServicesSameType = () => {
        const { params } = this.props.match;
        routes.getAllServicesSameType(params.categoryID)
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
        <div>
            {this.state.services.length > 0 && this.state.services.map((service) => {
                return (
                    <div key={service._id}>
                        <h3>{service.serviceName}</h3>
                    </div>
                )
            })}
        </div>
        </>
        );
    }
}

export default Services;
import React, { Component } from 'react';
import routes from '../lib/auth-service';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            services: [],
        }
    }
    componentDidMount() {
        this.getAllServicesSameType();
    }

    getAllServicesSameType = () => {
        const { params } = this.props.match;
        console.log(params, 'params')
        routes.getAllServicesSameType(params.categoryID)
        .then(responseFromApi => {
            console.log(responseFromApi , 'responseFromApi')
            this.setState({
              services: responseFromApi.data
            });
        })
        .catch(error => console.log(error));
      };

    render (){
        console.log(this.state.services , 'services')
        return( <div>
            {this.state.services.map((service) => {
                return (
                    <div key={service._id}>
                            <h3>{service.serviceName}</h3>
                    </div>
                )
            })}
        </div>)
    }

}

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
    return(
        <div>
        {props.services.map((service) =>{
            return(
                <Link to={`/services/${service.serviceType}`} key={service._id}>
                    <p>{service.serviceName}</p>
                    <p>{service.serviceType}</p>
                </Link>
            )
        })}
        </div>
    )
}
export default List;
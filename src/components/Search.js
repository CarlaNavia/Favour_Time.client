import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { Link } from "react-router-dom";
import './search.css';
import { Form, FormControl } from 'react-bootstrap';

class Search extends Component {
    state = { 
        search: "",
        searchList: [],
        filteredServiceList: [],
    }

  componentDidMount() {
    this.allServices();
    }
  
  filterService = (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = [...this.state.searchList].filter( serviceObj => {
      return serviceObj.serviceName.toLowerCase().includes(searchedTerm);
    })
    console.log(filteredList, 'filteredList')
    this.setState({filteredServiceList: filteredList})
  }
  
  allServices = () => {
    ServiceTypeService.getAllServices()
    .then(responseFromApi => {
      this.setState({
        searchList: responseFromApi,
        });
    })
    .catch(error => console.log(error));
  };

  handleChange = e => {
    const { name, value } = e.target;

    if(value){
      this.setState({[name]: value})
      this.filterService(this.state.search)
    }else{
      this.setState({
        filteredServiceList: [],
        search: ''
      })
    }
  }

  render() {
    return (
      <div className="wrapperSearch">
        <div className="">
        <Form>
        <FormControl type="text" placeholder="Search in all categories" name="search" className="mr-lg-2" value={this.state.search}  onChange={(e)=> this.handleChange(e)}  />
        </Form>

        <div className="search_Container">
        {this.state.filteredServiceList ? this.state.filteredServiceList.map((service, index)=> {
          return(
            <div className="boxFilter">
              <p key={index} >
              <Link className="liSearch" to={`/servicetype/${service.serviceType && service.serviceType._id}`}>
                <p className="NameService">{service.serviceName}</p>
                <p className="NameType">{service.serviceType && service.serviceType.serviceName}</p>
              </Link>
              </p>
            </div>
          )
        }) : "" }
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
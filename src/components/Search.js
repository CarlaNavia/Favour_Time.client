import React, { Component } from 'react';
import ServiceTypeService from '../lib/serviceType-service';
import { Link } from "react-router-dom";
import './search.css';

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
      <div className="wrapper">
        <div className="search_box">
        <input 
          type="search" 
          name="search" 
          className="searchInput"
          placeholder="Search in all categories" 
          value={this.state.search} 
          onChange={(e)=> this.handleChange(e)} 
        />
        <ul>
        {this.state.filteredServiceList ? this.state.filteredServiceList.map((service, index)=> {
          return(

              <li key={index}>
              <Link className="liSearch" to={`/servicetype/${service.serviceType && service.serviceType._id}`}>
                {service.serviceName} <br/>
                {service.serviceType && service.serviceType.serviceName}
              </Link>
              </li>
          )
        }) : "" }
        </ul>
        </div>
      </div>
    )
  }
}

export default Search;
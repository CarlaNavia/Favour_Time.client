import React, { Component } from 'react';
// import axios from 'axios';
import List from './List';
import routes from '../lib/auth-service';

class SearchService extends Component {
    constructor() {
        super();
        this.state = { 
            search: "",
            services: []
        };
      }

    allServices = () =>{
        routes.getAllServices()
        .then((response) =>{
            console.log(response, 'response')
            this.setState({
                services: response
            })
        })
    }
  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
    this.allServices(value);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          placeholder="Search" 
          value={this.state.search} 
          onChange={this.handleChange} 
        />
        <List services={this.state.services}/>
      </div>
    )
  }
}

export default SearchService;
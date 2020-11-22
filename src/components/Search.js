import React, { Component } from 'react';
// import axios from 'axios';
import List from './List';


class Search extends Component {
    state = { 
        search: ""
    }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
    this.props.searchServices(value);
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

export default Search;
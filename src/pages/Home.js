import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NewService from '../components/NewService';
import ServiceType from '../components/ServiceType';
import { withAuth } from "../lib/AuthProvider";


class Home extends Component {
    state = {
      showForm: false,
    }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm});
  }


    render(){
        return (
            <>
            <Navbar/>
            
            <ServiceType />
            <div>
                <button onClick={this.toggleForm}>{this.state.showForm ? 'Hide Form' : 'New Service'}</button>
                { this.state.showForm 
                  ? <NewService form={this.toggleForm}/> 
                  : null
                }
              </div>
            </>
        );
    }
};
  
export default withAuth(Home);
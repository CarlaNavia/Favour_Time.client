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
            <ServiceType/>
            <div>
                <button onClick={this.toggleForm}>New Service</button>
                { this.state.showForm 
                  ? <NewService /> 
                  : null
                }
              </div>
            </>
        );
    }
};
  
export default withAuth(Home);
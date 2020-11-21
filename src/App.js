import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ServiceType from './components/ServiceType';
import Services from './pages/Services';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar/>

          <Switch>
            <Route exact path='/' component={ServiceType} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/servicetype' component={ServiceType} />
            <Route exact path='/servicetype/:categoryID' component={Services} />
            <PrivateRoute exact path='/private' component={Private} />
<<<<<<< HEAD
=======
            <PrivateRoute exact path='/profile' component={Profile} />
            
>>>>>>> 45c5760038e18ee5cc26031a2ddbb1776edfece3
          </Switch>
        
 
        </div>
      </AuthProvider>
    );
  }
}

export default App;
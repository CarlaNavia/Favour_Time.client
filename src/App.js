import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
// import AnonRoute from "./components/AnonRoute";
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
          </Switch>
        
 
        </div>
      </AuthProvider>
    );
  }
}

export default App;
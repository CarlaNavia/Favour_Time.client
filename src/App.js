import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ServiceType from './components/ServiceType';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/servicetype' component={ServiceType} />
            <Route exact path='/servicetype/:categoryID' component={Services} />
            <PrivateRoute exact path='/services/:serviceID' component={ServiceDetails} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
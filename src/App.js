import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./components/PrivateRoute";
import ServiceType from './components/ServiceType';
import Services from './pages/Services';
import Packs from './pages/Packs';
import Faqs from './pages/Faqs';
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
<<<<<<< HEAD
            <Route exact path='/faqs' component={Faqs} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/profile/edit/:userId' component={EditProfile} />
            <PrivateRoute exact path='/packs' component={Packs} />
            
=======
            <PrivateRoute exact path='/services/:serviceID' component={ServiceDetails} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/profile' component={Profile} />
>>>>>>> b20da60c557644a1eb7866ae9613f63c1df7a567
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
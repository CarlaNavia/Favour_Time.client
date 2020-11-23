import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Search from '../components/Search';

class Navbar extends Component {

  getImageProfile() {
    if (this.props.user.imageProfile === "") {
      return this.props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='navbar'>
        {isLoggedin ? (
          <>
          <Link to={"/profile"} >
          <img src={this.getImageProfile()} alt="profile" style={{width: 50,  borderRadius: 50}}/>
          </Link>
            <p className='navbar-user'>
            name: {user.name} <br/>
            credits: {user.credits} credits
            </p>
            <button className='navbar-button' onClick={logout}>Logout</button>
            <Link to={"/"}>Logo para volver siempre al home</Link>
            <Search />
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
            <Search />
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);

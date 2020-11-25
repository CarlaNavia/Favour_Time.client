import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import MyBookings from "../../components/bookings/MyBookings";
import MyRequests from "../../components/bookings/MyRequests";
import MyReviews from "../../components/MyReviews/MyReviews";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { Navbar, Nav , Button } from 'react-bootstrap';
import "react-tabs/style/react-tabs.css";
import MyServices from "../../components/MyServices/MyServices";
import "./Profile.css";
import HeaderProfile from "../../components/HeaderProfile";


class Profile extends Component {
 

  render() {
    const { user, logout ,isLoggedin } = this.props;
    return (
      <>
      {isLoggedin ? (
        <Navbar fixed="top" bg="light" expand="lg">
         <Link to='/' className="logoNavbar">
         <h1 className="nameLogo">FavTime</h1>
         </Link>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
    
              <Button variant="outline-danger" className="space" size="lg">
                <Link to={"/packs"} className='buttonLink'>
                <img src='../../../Icons/tiempo-es-dinero.png' alt="Coins" className="imgButton"/> {user.credits} Credits
                </Link>
              </Button>
             
              <Button variant="outline-danger" size="lg">
              <Link to='/faqs' className='buttonLink'>
                 <img src='../../../Icons/informacion.png' alt="info" className="imgButton"/> Info
              </Link>
              </Button>
              <Link to='/#' className="navbar-item" onClick={logout} >Logout</Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
            ) : (
            <Navbar fixed="top" bg="light" expand="lg">
            <Link to='/' className="logoNavbar">
         <h1 className="nameLogo">FavTime</h1>
         </Link>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              
    
              <Button variant="outline-danger" className="space" size="lg">
                <Link to={"/login"} className='buttonLink'>Sign in
                </Link>
              </Button>
             
              <Button variant="outline-danger" size="lg">
              <Link to='/faqs' className='buttonLink'>
                 <img src='../../../Icons/informacion.png' alt="info" className="imgButton"/> Info
              </Link>
              </Button>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        )}
       


      <div className="container header">
        <HeaderProfile history={this.props.history} user={this.props.user} />

        <div className="container">
          <Tabs>
            <TabList>
              <Tab>
                <img
                  src="../../../booking.png"
                  alt="booking"
                  className="icon"
                />
              </Tab>
              <Tab>
                <img
                  src="../../../request.png"
                  alt="request"
                  className="icon"
                />
              </Tab>
              <Tab>
                <img src="../../../review.png" alt="review" className="icon" />
              </Tab>

              <Tab>
                <img
                  src="../../../services.png"
                  alt="service"
                  className="icon"
                />
              </Tab>
            </TabList>
            <TabPanel>
              <MyBookings userId={this.props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyRequests userId={this.props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyReviews userId={this.props.user._id} />
            </TabPanel>

            <TabPanel>
              <MyServices userId={this.props.user._id} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      </>
    );
  }
}

export default withAuth(Profile);

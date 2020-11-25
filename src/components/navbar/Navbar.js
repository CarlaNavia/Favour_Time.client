import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';
import { Navbar, Nav , Button } from 'react-bootstrap';

const NavBar = (props) => {

  function getImageProfile(){
    if (props.user.imageProfile === "") {
      return props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }
  const { user, logout ,isLoggedin } = props;


  return(
    <>
    {isLoggedin ? (
    <Navbar fixed="top" bg="light" expand="lg">
     <Link to='/' className="logoNavbar">
     <h1 className="nameLogo">FAVOUR TIME</h1>
     </Link>  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Button variant="outline-danger" size="lg">
          <Link to={"/profile"} className='buttonLink'>
            <img src={getImageProfile()} alt="profile" className="imgButtonProfile"/> Profile
          </Link>
          </Button>

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
     <h1 className="nameLogo">FAVOUR TIME</h1>
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
    </>
  );

}

export default withAuth(NavBar);


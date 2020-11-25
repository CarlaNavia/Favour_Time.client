import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';
import { Navbar, Nav , Button, Modal } from 'react-bootstrap';
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

const NavBar = (props) => {

  function getImageProfile(){
    if (props.user.imageProfile === "") {
      return props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }
  const { user, logout ,isLoggedin } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    {isLoggedin ? (
    <Navbar fixed="top" bg="light" expand="lg">
     <Link to='/' className="logoNavbar">
     <h1 className="nameLogo">FavTime</h1>
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
     <h1 className="nameLogo">FavTime</h1>
     </Link>  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          
    
          <Button variant="outline-danger" className="space" size="lg" onClick={handleShow} >
            Sign in
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

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
        <Modal.Title> Login </Modal.Title>
      </Modal.Header>
        <Modal.Body >
          <Login/>
        </Modal.Body>
        </Modal>
    </>
  );

}

export default withAuth(NavBar);


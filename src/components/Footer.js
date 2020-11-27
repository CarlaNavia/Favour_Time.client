import React from 'react'
import { Navbar } from "react-bootstrap";
import './footer.css';

export default function Footer() {
    return (
  <Navbar sticky="bottom" bg="light" className="navbarInfo">
    <Navbar.Brand href="#home"  className="containerFooter">
    {/* <div className="containerIcons">
      <img
        alt="facebook"
        src="../../Icons/facebook.png"
        width="30"
        height="30"
        className="iconFooter align-center"
      />
      <img
        alt="twiiter"
        src="../../Icons/twitter.png"
        width="30"
        height="30"
        className="iconFooter align-center"
      />
      <img
        alt="instagram"
        src="../../Icons/instagram.png"
        width="30"
        height="30"
        className="iconFooter align-center"
      />

    </div> */}
  
    </Navbar.Brand>
  </Navbar>
    )
}



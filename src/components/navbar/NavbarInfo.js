import React from 'react'
import './navbarInfo.css';
import { Navbar } from "react-bootstrap";

export default function NavbarInfo() {
    return (
       <>
       <div className="navbarContainer">
        <Navbar bg="dark" variant="dark" className="navbarInfo">
        <Navbar.Brand href="#home" >
        <div className="containerDiscount">
          <img
            src="../../../Icons/viernes-negro.png"
            alt="BF"
            width="30"
            height="30"
            className="BFIcon"
          />
          <div className="containerInfoSpan">
           <p className="textInfo"> 
           <span className="infoSpan"> The most awaited offers of the YEAR are here ! <span className="date">30% Until 29/11 at 22h </span></span> 
           <span className="infoDate">30% Until 29/11 at 22h</span>
           </p> 
          </div>
        </div>
   
        </Navbar.Brand>
        </Navbar>  
       </div>
       </>
    )
}

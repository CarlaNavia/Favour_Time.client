import React from "react";
import NavBar from "../components/navbar/Navbar";
import NewService from "../components/services/NewService";
import ServiceType from "../components/services/ServiceType";
import { withAuth } from "../lib/AuthProvider";
import RandomServices from "../components/services/RandomServices";
import './home.css';
import { Button, Modal } from 'react-bootstrap';
import Search from "../components/Search";

function Home() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="has-navbar-fixed-top">
      
        <NavBar />
     
        <div className="mainContainer">
          <div className="searchContainer">
            <h2 className="tituloSearch">Poner texto tipo pregunta ?</h2>
            <Search />
          </div>

          <div className="serviceTypeContainer">
            <ServiceType />
          </div>
        </div>
        <div className="btnService">
        <Button variant="link" onClick={handleShow}>New Service</Button>
        </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewService/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

     
        <RandomServices />
        </div>
    );
  }


export default withAuth(Home);

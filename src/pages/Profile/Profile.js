import React from "react";
import { withAuth } from "../../lib/AuthProvider";
import MyBookings from "../../components/bookings/MyBookings";
import MyRequests from "../../components/bookings/MyRequests";
import MyReviews from "../../components/MyReviews/MyReviews";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { Navbar, Nav , Button , Modal} from 'react-bootstrap';
import "react-tabs/style/react-tabs.css";
import MyServices from "../../components/MyServices/MyServices";
import "./Profile.css";
import HeaderProfile from "../../components/HeaderProfile";
import Faqs from "../Faqs";

function Profile(props) {
  const [showFaq, setShowFaq ] = React.useState(false);
  const handleCloseFaq = () => setShowFaq(false);
  const handleShowFaq = () => setShowFaq(true);
  const { user } = props;

    return (
      <>
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
             
              <Button variant="outline-danger" size="lg" onClick={handleShowFaq}>
                <img src='../../../Icons/informacion.png' alt="info" className="imgButton"/> Info
              </Button>

          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Modal
        show={showFaq}
        onHide={handleCloseFaq}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
        <Modal.Title> <h1 className="h1_title">FREQUENT ASKED QUESTIONS</h1> </Modal.Title>
      </Modal.Header>
        <Modal.Body >
          <Faqs/>
        </Modal.Body>
        </Modal>
       
      <div className="container header">
        <HeaderProfile history={props.history} user={props.user} />

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
              <MyBookings userId={props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyRequests userId={props.user._id} />
            </TabPanel>
            <TabPanel>
              <MyReviews userId={props.user._id} />
            </TabPanel>

            <TabPanel>
              <MyServices userId={props.user._id} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      </>
    );
  }


export default withAuth(Profile);

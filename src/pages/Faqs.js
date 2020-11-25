import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Faq.css";

class Faqs extends Component {
  render() {
    return (
     <>
          <Accordion defaultActiveKey="0" className="container">
            <Card>
              <Accordion.Toggle as={Card.Header} className="headerModalFaqs" eventKey="0">
                How do I create a FavTime account and edit my user profile?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  In order to create an account in FavTime you must go to the
                  <strong> "Sign In"</strong> button that is in the navigation
                  bar and complete the form with your personal data. Once the
                  account is created, you will be automatically registered and
                  you will be able to access your personal profile through the
                  icon of your photo and your name. Right there you will see the
                  option to <strong> edit your profile</strong> and you can
                  update all the information you need.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} className="headerModalFaqs" eventKey="1">
                How can I book and review a service?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Once you choose the service that you most want to book, you
                  must <strong> complete a form </strong> to inform the other person what day and
                  at what time you need it. When the other person receives your
                  request, they can <strong>accept or decline </strong> it and it will appear
                  updated in the "My Bookings" section of your profile. When the
                  reservation is accepted you can <strong>write a review and add a score</strong>.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className="container">
            <Card>
              <Accordion.Toggle as={Card.Header} className="headerModalFaqs" eventKey="0">
                What can I do to post a good ad?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  The <strong> images </strong>and
                  <strong> description </strong>
                  of the service must be of quality and refer exclusively to the
                  service offered. You must correctly
                  <strong> assign the category</strong> to the service offered
                  and write the ads appropriately,
                  <strong> providing the necessary information</strong> to
                  describe the service offered. <strong>Credits </strong>should
                  reflect the value of the service.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} className="headerModalFaqs" eventKey="1">
                I have an issue or suggestion that I would like to share, how do
                I do it?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Of course! We will be happy to hear your suggestions and help
                  you in case you have had a problem. You will find us at
                  <strong> info@favtime.com</strong>. Your point of view is a
                  great value to us, and we will be delighted to be able to
                  improve based on your opinion.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
</>
    );
  }
}

export default Faqs;

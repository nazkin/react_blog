import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import './Hero.css';
/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
      <Container className="hero-container">
          <Row className="my-5">
            <Col>
              <div className="hero-brand">Thoughts of the Week</div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="hero-nav" lg={7}>
              <Nav  defaultActiveKey="/programing" as="ul">
                <Nav.Item  as="li">
                  <Nav.Link className="hero-nav-links" href="/programing">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="hero-nav-links" href="/tech">Technology</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="hero-nav-links" href="/business">Business</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={5} className="d-flex justify-content-end align-items-center">
              <Form inline>
                <FormControl type="text" placeholder="Search Topics" className=" mr-lg-2" />
                <Button variant="outline-info" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>   
      </Container>
   )

 }

export default Hero;
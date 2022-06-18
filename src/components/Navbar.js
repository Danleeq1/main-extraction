import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../images/Main Extraction Logo.png"; 
import "../Nav.scss"; 
import "../App.scss";
import "../custom.scss";


// eslint-disable-next-line import/no-anonymous-default-export
export default class 
 extends Component {
  render() {
    return (
      <div class="Navigation">
        <Navbar className="color-nav"  fixed="top"  >
        <Container>
          <Navbar.Brand href="#home">  </Navbar.Brand>
          <img src={logo} style = {{width:100}} alt="business-logo" /> 
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"#F0D7B1"}}>Home</Nav.Link>
            <Nav.Link href="#about"style={{color:"#F0D7B1"}}>About Us</Nav.Link>
            <Nav.Link href="#contact"style={{color:"#F0D7B1"}}>Contact</Nav.Link>
            <Nav.Link href="#coffee"style={{color:"#F0D7B1"}}>Coffee</Nav.Link> 
          </Nav>
          <Button variant="outline-danger" color="#F0D7B1" style={{size:"96"}} >Order Now</Button> 
        </Container>
      </Navbar>
      </div>
    )
  }
}

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{position:'fixed', width: '100%', zIndex:'10'}}>
      <Container>
        <Navbar.Brand as={Link} to="/"> 
          <img src="1.png" alt='logo' style={{height:'40px', width:'40px', border:'2px', borderRadius:'50px'}}/>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/"><strong><h4>Daniel Kioko</h4></strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


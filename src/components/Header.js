import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { HashLink as Links } from 'react-router-hash-link';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{position:'fixed', width: '100%', zIndex:'10'}}>
      <Container>
        <Navbar.Brand as={Links} to="#home"> 
          <img src="profile.jpg" alt='logo' style={{height:'40px', width:'40px', border:'2px', borderRadius:'50px'}}/>
        </Navbar.Brand>
        <Navbar.Brand as={Links} to="#home"><strong><h4>Daniel Kioko</h4></strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Links} to="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link as={Links} to="#about" className='text-light'>About</Nav.Link>
            <Nav.Link as={Links} to="#projects" className='text-light'>Projects</Nav.Link>
            <Nav.Link as={Links} to="#contactme" className='text-light'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


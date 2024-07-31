import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for additional styling if needed

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Me</h5>
            <p>Short bio or description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">LinkedIn</a></li>
              <li><a href="#" className="text-white">GitHub</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

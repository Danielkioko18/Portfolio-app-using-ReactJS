import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import './Footer.css'; // Import custom CSS for additional styling if needed

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5><u>About Me</u> </h5>
            <p>A Fullstack Developer, Web Designer & Developer, with skills and experience in different programming languages and IT Technician</p>
          </Col>
          <Col md={4}>
            <h5><u>Contact</u> </h5>
            <p><FaEnvelope /> danielkioko1844@gmail.com</p>
            <p><FaPhone /> +254769894714</p>
          </Col>
          <Col md={4}>
            <h5><u>Follow Me</u> </h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/Danielkioko18" className="text-white"><FaGithub />  GitHub</a></li>
              <li><a href="https://github.com/Danielkioko18" className="text-white"><FaTwitter />  Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import './Footer.css'; // Import custom CSS for additional styling if needed

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={12}>
            <h5><u>Follow Me</u> </h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/Danielkioko18" className="text-white"><FaGithub />  GitHub</a></li>
              <li><a href="https://x.com/danielkioko01" className="text-white"><FaTwitter />  Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/daniel-kioko-378099327" className="text-white"><FaLinkedin />  Linkedin</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Kioko. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

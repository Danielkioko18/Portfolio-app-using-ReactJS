import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for additional styling if needed

const Footer = () => {
    return(
        <Row id='services' className='my-5'>
            <Col>
                <h2>Projects</h2>
                <Row>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src="spms.jpg" />
                    <Card.Body>
                        <Card.Title>Students Projects Management System</Card.Title>
                        <Card.Text>
                        System for managing students final year projects. 
                        Developed using Django framework. 
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/your-username/project1">View Project</Button>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Col>
        </Row>
    )
}
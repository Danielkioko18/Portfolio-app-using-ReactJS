import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for additional styling if needed

const Services = () => {
    return(
        <Row id='services' className='my-5'>
            <Col>
                <h2 className='text-primary'><strong><u>SERVICES</u></strong></h2>
                <h5>Discover among others, the services that I offer based on my expertise and experience.</h5>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="desktop_2.png" alt="service" />
                                <Card.Title>WEB DESIGN</Card.Title>
                                <Card.Text>
                                    Proficient in crafting a vissually appealing web designs that ensures good user experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="pro_2.png" alt="service" />
                                <Card.Title>WEB DEVELOPEMENT</Card.Title>
                                <Card.Text>
                                    Experienced building websites and web applications using HTML, CSS, PHP,Python, Javascript and Java
                                    which are both dynamic and static according to clients specific needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="desktop_1.jpeg" alt="service" />
                                <Card.Title>SOFTWARE DEVELOPEMENT</Card.Title>
                                <Card.Text>
                                    Expert in design and developement of desktop applications using Java and Python, 
                                    that are appealing and user satisfying.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="pro_3.png" alt="service" />
                                <Card.Title>PROGRAMING & CODING SERVICES</Card.Title>
                                <Card.Text>
                                    Proficient in writting basic and advance programs and scripts in different programming languages such as 
                                    Python, Java, Javascript, R, PHP, HTML among others.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Services;
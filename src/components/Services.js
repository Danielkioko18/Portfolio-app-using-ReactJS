import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for additional styling if needed

const Services = () => {
    return(
        <Row id='services' className='my-5'>
            <Col>
                <h2 className='text-primary'><strong><u>SERVICES</u></strong></h2>
                <h5>Discover among others, some of Kioko's services based on his expertise and experience that he offers.</h5>
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
                                    Experienced building websites and web applications using PHP,Python, Javascript and Java
                                    which are both dynamic and static according to clients specific needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="desktop_1.jpeg" alt="service" />
                                <Card.Title>DESKTOP APPLICATION DEVELOPEMENT</Card.Title>
                                <Card.Text>
                                    Expert in design and developement of desktop applications using Java, Python, & C 
                                    that are appealing and user satrisfying.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="mobile_2.jpeg" alt="service" />
                                <Card.Title>MOBILE APP DEVELOPEMENT</Card.Title>
                                <Card.Text>
                                    Skilled design and developement of mobile applications using Java, Kotlin, & Python
                                    that are appealing and user satisfying.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src="pro_3.png" alt="service" />
                                <Card.Title>GENERAL PROGRAM WRITING/CODING SERVICES</Card.Title>
                                <Card.Text>
                                    Proficient in writting programs in different programming languages such as 
                                    Python, Java, Javascript, Rust, C, C++, PHP, HTML among other languages
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
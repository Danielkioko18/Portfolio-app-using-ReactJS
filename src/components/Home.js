import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // Import custom CSS if needed

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="my-5">
          <Col md={6}>
            <h1>Hello, I'm Daniel Kioko</h1>
            



            <Button variant="primary" href="contact">Get in Touch</Button>
          </Col>
          <Col md={6}>
            <img src="path/to/your/profile-pic.jpg" alt="Daniel Kioko" className="img-fluid rounded-circle" />
          </Col>
        </Row>
        
        <Row className="my-5">
          <Col>
            <h2>Skills</h2>
            <ul className="list-unstyled">
              <li><strong>Python</strong></li>
              <li><strong>Java</strong></li>
              <li><strong>PHP</strong></li>
              <li><strong>JavaScript</strong></li>
              <li><strong>MySQL</strong></li>
              <li><strong>Postgresql</strong></li>
              <li><strong>Sqlite</strong></li>
              <li><strong>CSS/Bootstrap</strong></li>
              <li><strong>Git</strong></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Card>
                  <Card.Title className='text-danger'><strong>ABOUT ME</strong></Card.Title>
                <Card.Body>
                  <Card.Text>
                    <p>
                      Daniel Kioko is a passionate and fullstack developer with proficiency in different programming 
                      languages and technologies. With expertise and knowledge in Python, Java, PHP, and JavaScript, 
                      Daniel excels in frontend development, backend development, and database design for software and 
                      web applications.

                      Proficient in web development using languages such as PHP, HTML, and JavaScript, and frameworks 
                      such as Django and Flask for Python, and Node.js for JavaScript. Daniel Kioko brings a versatile 
                      skill set to the table, allowing him to create robust and scalable applications. His experience spans both the server-side and client-side, ensuring comprehensive solutions for diverse project needs.

                      Daniel Kioko is also experienced in application development in Java, JavaScript, and Python. His 
                      commitment to staying updated with the latest industry trends and technologies enables him to 
                      deliver innovative and efficient software solutions. Daniel's dedication to continuous learning 
                      and improvement drives his success in the ever-evolving field of software development.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h2>Projects</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="path/to/project1-thumbnail.jpg" />
                  <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                      A brief description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project1">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="path/to/project2-thumbnail.jpg" />
                  <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>
                      A brief description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project2">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="path/to/project3-thumbnail.jpg" />
                  <Card.Body>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>
                      A brief description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

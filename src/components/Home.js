import React from 'react';
import { Container, Row, Col, Button, Card,Section } from 'react-bootstrap';
import './Home.css'; // Import custom CSS if needed

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="my-5" id='#home'>
          <Col md={6}>
            <h1>Hello, I'm Daniel Kioko</h1>
            
            <Button variant="primary" href="contact">Get in Touch</Button>
          </Col>
          <Col md={6}>
            <img src="1.png" alt="Daniel Kioko" className="img-fluid rounded-circle" />
          </Col>
        </Row>
        <Row id='#about'>
          <Col>
            <Row>
              <Card>                  
                <Card.Body>
                  <Card.Text>
                    <div className='row'>
                      <div class="col-md-6">
                          <div className="row">
                            <div className="col-md">
                              <img src="path/to/project1-thumbnail.jpg" style={{height:'97%', width:'97%', border:'2px', borderRadius:'5px'}}/>
                            </div>
                            <div className="col-md text-align-left">
                              <p><strong>Name:</strong> DANIEL KIOKO</p>
                              <p><strong>Phone:</strong> +254769894714</p>
                              <p><strong>Address:</strong> Nairobi, Kenya</p>
                              <p><strong>Email:</strong> danielkioko1844@gmail.com</p>
                            </div>
                          </div>

                          <h4>Skills</h4>
                          
                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0"
                            aria-valuemax="100"><strong>Python  82%</strong></div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0"
                            aria-valuemax="100"><strong>Java 78%</strong></div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"><strong>PHP  80%</strong> </div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0"
                            aria-valuemax="100"><strong>Javascript  70%</strong> </div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0"
                            aria-valuemax="100"><strong>Mysql  89%</strong></div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '81%'}} aria-valuenow="81" aria-valuemin="0"
                            aria-valuemax="100"><strong>Postgres SQL   81%</strong></div>
                          </div>

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow="88" aria-valuemin="0"
                            aria-valuemax="100"><strong>CSS/Bootstrap  88%</strong> </div>
                          </div>
                          

                          <div className="progress mb-4" style={{height: '30px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0"
                            aria-valuemax="100"><strong>Github  80%</strong> </div>
                          </div>
                          
                      </div>
                      <div class="col-md-6">
                        <Card.Title className='text-danger'><strong>ABOUT ME</strong></Card.Title>
                        <p>
                          Daniel Kioko is a passionate and fullstack developer with proficiency in different programming 
                          languages and technologies. With expertise and knowledge in Python, Java, PHP, and JavaScript, 
                          Daniel excels in frontend development, backend development, and database design for software and 
                          web applications.
                        </p>

                        <p>
                          Proficient in web development using languages such as PHP, HTML, and JavaScript, and frameworks 
                          such as Django and Flask for Python, and Node.js for JavaScript. Daniel Kioko brings a versatile 
                          skill set to the table, allowing him to create robust and scalable applications. His experience spans both the server-side and client-side, ensuring comprehensive solutions for diverse project needs.
                        </p>

                        <p>
                          Daniel Kioko is also experienced in application development in Java, JavaScript, and Python. His 
                          commitment to staying updated with the latest industry trends and technologies enables him to 
                          deliver innovative and efficient software solutions. Daniel's dedication to continuous learning 
                          and improvement drives his success in the ever-evolving field of software development.
                        </p>

                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row id='#projects' className="my-5">
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
        <Row id='#contactme'>
          <div className="card">
            <div className="card-title">
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 className='text-primary'>Message Me</h4>
                  <form>
                    <div class="form-group mb-3">
                      <input type="email" class="form-control" id="" placeholder="Your Email" />
                    </div>

                    <div class="form-group mb-3">
                      <input type="Text" class="form-control" id="" placeholder="Name" />
                    </div>

                    <div class="form-group mb-3">
                      <input type="Subject" class="form-control" id="" placeholder="Subject" />
                    </div>
                    
                    <div class="form-group mb-3">
                      <textarea class="form-control" id="Your Message" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <div class="form-group">
                      <button className='btn btn-primary' type="submit">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <h4 className='text-primary'>Get In Touch</h4>
                  <p>Get in touch with Daniel for collaborations and enquiries through these platforms</p>
                  <p><strong><span className='fa fa-phone'></span></strong><a href="tel:+254769894714">+254769894714</a></p>
                  <p><strong>Email:</strong><a href="mailto: danielkioko1844@gmail.com"> danielkioko1844@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

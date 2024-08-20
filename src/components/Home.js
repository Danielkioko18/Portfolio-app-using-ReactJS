import React from 'react';
import { Container, Row, Col, Button, Card,Section } from 'react-bootstrap';
import './Home.css'; // Import custom CSS if needed

const Home = () => {
  return (
    <div className="home">
        <Row className="animate my-5" id='#home' style={{height:'500px', backgroundColor:'grey', width:'device-width'}}>
          <h3 className="animated-text">
            Hello, I am Daniel Kioko, Web Designer, Web Developer, Frontend Developer, Backend Developer, Software Developer
          </h3>
        </Row>
      <Container>
        <Row id='about'>
          <Col>
            <Row>
              <Card>                  
                <Card.Body>
                  <Card.Text>
                    <div className='row'>
                      <div class="col-md-6">
                          <div className="row">
                            <div className="col-md">
                              <img src="1.png" style={{height:'97%', width:'97%', border:'2px', borderRadius:'5px'}}/>
                            </div>
                            <div className="col-md text-align-left">
                              <p><strong>Name:</strong> DANIEL KIOKO</p>
                              <p><strong>Phone:</strong> +254769894714</p>
                              <p><strong>Address:</strong> Nairobi, Kenya</p>
                              <p><strong>Email:</strong> danielkioko1844@gmail.com</p>
                            </div>
                          </div>

                          <h4>Skills</h4>
                          
                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0"
                            aria-valuemax="100"><strong>Python  82%</strong></div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0"
                            aria-valuemax="100"><strong>Java 78%</strong></div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"><strong>PHP  80%</strong> </div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0"
                            aria-valuemax="100"><strong>Javascript  70%</strong> </div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0"
                            aria-valuemax="100"><strong>Mysql  89%</strong></div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '81%'}} aria-valuenow="81" aria-valuemin="0"
                            aria-valuemax="100"><strong>Postgres SQL   81%</strong></div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow="88" aria-valuemin="0"
                            aria-valuemax="100"><strong>CSS/Bootstrap  88%</strong> </div>
                          </div>
                          

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0"
                            aria-valuemax="100"><strong>Github  80%</strong> </div>
                          </div>
                          
                      </div>
                      <div class="col-md-6">
                        <Card.Title className='text-danger'><strong>ABOUT ME</strong></Card.Title>
                        <p>
                          Daniel Kioko is a passionate full-stack developer who is skilled in various programming languages 
                          and technologies. He quickly adapts to new tools and environments, making him a fast learner. 
                          With expertise in Python, Java, PHP, and JavaScript, Daniel excels in both frontend and backend development, 
                          as well as designing databases for software and web applications.
                        </p>

                        <p>
                          Daniel is proficient in web development, using languages like PHP, HTML, and JavaScript, 
                          along with frameworks such as Django and Flask for Python, and Node.js for JavaScript. 
                          His wide range of skills allows him to build strong and scalable applications. 
                          His experience spans both the server-side and client-side, enabling him to provide 
                          complete solutions for diverse project needs.
                        </p>

                        <p>
                          In addition to web development skills, Daniel is also experienced in creating 
                          applications using Java, JavaScript, and Python. His ability to learn quickly and 
                          stay updated with the latest industry trends and technologies helps him deliver 
                          innovative and efficient software solutions. Daniel's commitment to continuous learning 
                          and improvement drives his success in the ever-evolving field of software development.
                        </p>
                        <p className='text-success'><strong>To view my CV/Resume click</strong> <a href="http://"> Here.</a></p>

                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>

        <Row id='projects' className="my-5">
          <Col>
            <h2>Projects</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="spms.jpg" />
                  <Card.Body>
                    <Card.Title>Students Projects Management System</Card.Title>
                    <Card.Text>
                      A management system for manageing students final year projects in a specific department. 
                      developed using django framework. 
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project1">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="wise.jpg" />
                  <Card.Body>
                    <Card.Title>Booking System</Card.Title>
                    <Card.Text>
                      A ticket reservation system for o nline bus booking in PHP.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project2">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="bts.jpg" />
                  <Card.Body>
                    <Card.Title>Bus Ticketing System </Card.Title>
                    <Card.Text>
                      A system for proccessing of tickets at bus stations offices.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="wise.jpg" />
                  <Card.Body>
                    <Card.Title>Wise Wallet</Card.Title>
                    <Card.Text>
                      Flask framework application that enables one to track there monthly expenses 
                      and alert one on excesses through in app notifications.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="1.png" />
                  <Card.Body>
                    <Card.Title>Pharmacy System</Card.Title>
                    <Card.Text>
                      A parmacy management system to manage the activiteies in a pharmacy including storing of data and a POS build using PHP.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="wise.jpg" />
                  <Card.Body>
                    <Card.Title>School System</Card.Title>
                    <Card.Text>
                      A brief description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="wise.jpg" />
                  <Card.Body>
                    <Card.Title>Student System</Card.Title>
                    <Card.Text>
                      Student system developed using Java for management of students iformation.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="app.jpg" />
                  <Card.Body>
                    <Card.Title>Python GUI Application</Card.Title>
                    <Card.Text>
                      A simple Python gui application with database that hase CRUD application.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="calc.jpg" />
                  <Card.Body>
                    <Card.Title>Simple Python Gui Calculator</Card.Title>
                    <Card.Text>
                      A simple calculator python.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/your-username/project3">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id='contactme'>
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

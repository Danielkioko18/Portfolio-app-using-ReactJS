import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook,FaInstagram, FaLinkedin, FaWhatsapp,FaGithub } from "react-icons/fa";
import './Home.css'; // Import custom CSS if needed
import Services from './Services';

const Home = () => {
  return (
    <div className="home">
        <Row className="animate my-2" id='home' style={{ height: '500px', backgroundColor: 'grey', width: '100%', marginTop:'1200px' }}>
          <div className="col-md-12 d-flex align-items-center" id='profile'>
            {/* Profile Image Section */}
            <div className="row">
              <div className="col-md me-3">
                <img 
                  src="me_5.jpeg" 
                  alt="Kioko" 
                  style={{ height: '250px', width: '250px', border: '2px solid white', borderRadius: '50%'
                  }} 
                />
              </div>

              {/* Text Section */}
              <div className="col-md"> 
                <h6 className="text-light"><strong>Hello, <br /><br /></strong></h6>
                <h2 className='text-light'>I am <b className='text-danger'> Daniel</b></h2>

                <h4>
                  <b className="text-warning">Software and </b> 
                  <b className="text-warning">Web Developer, </b>
                </h4> <br />
                <h6>
                  <b className="text-light">Full Stack Software and Web Developer with 4+ years experience in building softwares.</b>
                </h6>
              </div>
            </div>
          </div>
        </Row>

        {/*About me Section */}
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
                              <img src="me_1.jpeg" alt='Kioko' style={{height:'90%', width:'90%', border:'2px', borderRadius:'5px'}}/>

                              {/*<p className='ml-0'><strong>Name:</strong> DANIEL KIOKO</p>
                              <p><strong>Phone:</strong> +254769894714</p>
                              <p><strong>Address:</strong> Nairobi, Kenya</p>
                              <p><strong><FaEnvelope /></strong>  danielkioko1844@gmail.com</p>*/}
                          </div>

                          {/* <h4 className='text-primary'><strong><u>Skills</u></strong></h4>
                          
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
                            aria-valuemax="100"><strong>Mysql/Postgres SQL 89%</strong></div>
                          </div>

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow="88" aria-valuemin="0"
                            aria-valuemax="100"><strong>CSS/Bootstrap  88%</strong> </div>
                          </div>
                          

                          <div className="progress mb-3" style={{height: '25px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0"
                            aria-valuemax="100"><strong>Github  80%</strong> </div>
                          </div> */}
                          
                      </div>
                      <div class="col-md-6">
                        <Card.Title className='text-primary'><strong><u>ABOUT ME</u></strong></Card.Title>
                        <p>
                          I am an experienced software developer with 4 years experience in sofrtware developement. My expertise spans in a 
                          range of programming languages, frameworks, and essential tools necessary for modern software development.
                          My portfolio showcases a diverse range of projects, from innovative applications to dynamic and scalable web development.
                        </p>

                        <p>
                          In my professional journey, I have had the opportunity to collaborate with notable organizations such as  
                          the County Government of Chuka. During my tenure, I played a key role in maintaining and enhancing the 
                          Makueni County Referral Hospital where i was able to manage and interact with various hospital systems 
                          such as the Hospitals Management System (HMS), 
                          contributing to its efficiency and reliability in serving healthcare needs in the organization. 
                        </p>

                        <p>
                          Additionally, I am passionate about creating impactful software that solves real-world problems. I continuously refine 
                          my skills by staying updated with the latest industry trends and technologies. Feel free to browse through the projects 
                          showcased on this platform, which reflect my commitment to quality and innovation.
                        </p>
                        <a className='btn btn-success' href="Daniel Kioko CV.pdf"> Download CV</a>

                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>

        {/* My services section */}
        
        <Services />

        {/* My Projects section*/}                        
        <Row id='projects' className="my-5">
          <Col>
            <h2 className='text-primary'><strong><u>Projects</u></strong></h2>
            <h5>Discover among others, some of my Key Projects and skills i have done.</h5>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="proj.jpeg" />
                  <Card.Body>
                    <Card.Title>Students Projects Management System</Card.Title>
                    <Card.Text>
                      System for managing students final year projects. 
                      Developed using Django framework. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="bus.jpg" />
                  <Card.Body>
                    <Card.Title>Booking System</Card.Title>
                    <Card.Text>
                      A ticket reservation system for o nline bus booking in PHP.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="ticket.jpg" />
                  <Card.Body>
                    <Card.Title>Bus Ticketing System </Card.Title>
                    <Card.Text>
                      A system for proccessing of tickets at bus stations offices.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="wallet.jpg" />
                  <Card.Body>
                    <Card.Title>Wise Wallet</Card.Title>
                    <Card.Text>
                      Flask framework application that enables one to track there monthly expenses 
                      and alert one on excesses through in app notifications.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="pharm.png" />
                  <Card.Body>
                    <Card.Title>Pharmacy System</Card.Title>
                    <Card.Text>
                      A parmacy management system to manage the activiteies in a pharmacy including storing 
                      of data and a POS build using PHP.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="school.jpg" />
                  <Card.Body>
                    <Card.Title>School System</Card.Title>
                    <Card.Text>
                      JavaSwing project school management system.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="students.jpg" />
                  <Card.Body>
                    <Card.Title>Student System</Card.Title>
                    <Card.Text>
                      Student system developed using Java for management of students iformation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="python app.jpg" />
                  <Card.Body>
                    <Card.Title>Python GUI Application</Card.Title>
                    <Card.Text>
                      A simple Python gui application with database that hase CRUD application.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="schoolwebs.jpg" />
                  <Card.Body>
                    <Card.Title>School Website</Card.Title>
                    <Card.Text>
                      An highschool website.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Contact me section */}
        <Row id='contactme'>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h4 className='text-primary'><u>Message Me</u></h4>
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
                      <button className='btn btn-primary' type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <h4 className='text-primary'><u>Get In Touch</u></h4>
                  <div className="row">

                    <div className="col text-success">
                      <a href="https://wa.me/+254769894714" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize:'40px' }}>
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div className="col text-danger">
                      < a href="https://www.instagram.com/danielkioko01/profilecard/?igsh=Y3FvdWpnY3gxOTZz" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize:'40px' }}>
                        <FaInstagram />
                      </a>
                    </div>
                    <div className="col text-primary">
                      <a href="https://www.facebook.com/profile.php?id=100061180520493" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize:'40px' }}>
                        <FaFacebook />
                      </a>
                    </div>
                    <div className="col text-primary">
                      < a href="https://www.linkedin.com/in/daniel-kioko-378099327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize:'40px' }}>
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="col text-dark">
                      <a href="https://github.com/Danielkioko18" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize:'40px' }}>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
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

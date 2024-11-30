import React, { useEffect,useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook,FaInstagram, FaLinkedin, FaWhatsapp,FaGithub } from "react-icons/fa";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';// Import AOS styles
import './Home.css'; // Import custom CSS if needed
import emailjs from '@emailjs/browser';
import Services from './Services';

const Home = () => {

  const form = useRef();

  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      once: true, // Animation runs only once (on first scroll)
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    emailjs
      .sendForm(
        'service_j7fk2za', // Replace with your EmailJS service ID
        'template_kujpjci', // Replace with your EmailJS template ID
        form.current,
        'C_ChvHnenqn69sdzC' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.error(error.text);
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div className="home">
        <Row className="animate my-2" id='home' style={{ height: '510px', backgroundColor: 'grey'}}>
          <div className="col-md-12 d-flex align-items-center" id='profile'>

              {/* Text Section */}
              <div className="col-md-12"> 
                <h6 className="text-light"><strong>Hello, <br /><br /></strong></h6>
                <h2 className='text-light'>I am <b className='text-danger'> Daniel</b></h2>

                <h4>
                  <b className="text-warning">Software and </b> 
                  <b className="text-warning">Web Developer, </b>
                </h4> <br />
                <h6>
                  <b className="text-light">Full Stack Software and Web Developer with 4+ years experience.</b>
                </h6>
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
                          <div className="row" >
                              <img id='prof' src="me_1.jpeg" alt='Kioko' style={{height:'85%', width:'85%', border:'2px', borderRadius:'5px'}}/>
                          </div>                          
                      </div>
                      <div class="col-md-6">
                        <Card.Title className='text-primary'><strong><u>ABOUT ME</u></strong></Card.Title>
                        <p>
                          I am a software developer with 4 years of experience in creating innovative applications and scalable web solutions. 
                          My expertise spans a range of programming languages, frameworks, and tools essential for modern development. 
                          Passionate about building impactful software to solve real-world problems, I stay updated with the latest industry 
                          trends to continuously refine my skills. My portfolio reflects a commitment to quality, creativity, and innovation. 
                          Feel free to explore some of my projects showcased here.
                        </p>
                        <h4><b className='text-danger'><u>Tech Stack</u></b></h4>
                        <ul id='tech'>
                          <li><b className='text-success'>Languages:</b> Python, Java, JavaScript, PHP, HTML</li>
                          <li><b className='text-success'>Frameworks:</b> Django, Flask, ReactJS</li>
                          <li><b className='text-success'>Version Control:</b> GitHub</li>
                        </ul>
                        <a className='btn btn-success' href="Daniel Kioko CV.pdf"> View Resume</a>

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
            <h5>Discover among others, some of my Key Projects and skills I have done.</h5>
            <Row>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="proj.jpeg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Students Projects Management System</Card.Title>
                      <Card.Text className="text-white">
                        Manage and track Your students final year projects from one point online
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/SPMS" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="bus.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Bus Booking System</Card.Title>
                      <Card.Text className="text-white">
                        Book and Reserve tickets for passengers online 
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Booking_System" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="ticket.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Bus Ticketing System</Card.Title>
                      <Card.Text className="text-white">
                        Generate receipts using computerized ticketing system.
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Bus-Ticketing-System" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="wallet.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Wise Wallet</Card.Title>
                      <Card.Text className="text-white">
                        Track your financial budgets and spending  to help save on money.
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Wise-Wallet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="pharm.png" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Pharmacy System</Card.Title>
                      <Card.Text className="text-white">
                        Manage your pharmacy's activities such as stock, invoices and supply
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Pharmacy-System-PHP" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="school.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">School System</Card.Title>
                      <Card.Text className="text-white">
                       Manage school work and records easily.
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/School_System-Java" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="students.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Student System</Card.Title>
                      <Card.Text className="text-white">
                        Manage students information records and exam records.
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Student_Management_System-Java-Swing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="property.jpg" className="property-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Property Rental System</Card.Title>
                      <Card.Text className="text-white">
                        Manage rental properties through online system
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/property-rental-system-in-Django" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="portfolio.jpg" className="portfolio-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Portfolio Website</Card.Title>
                      <Card.Text className="text-white">
                        Information about my career on a portfolio website
                      </Card.Text>
                      <a 
                        href="https://danielkioko.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="python app.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">Python GUI Application</Card.Title>
                      <Card.Text className="text-white">
                        Simple Python GUI App
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/Python-App" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="project-card">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src="schoolwebs.jpg" className="project-img" />
                    <div className="overlay">
                      <Card.Title className="text-white">School Website</Card.Title>
                      <Card.Text className="text-white">
                        A school website.
                      </Card.Text>
                      <a 
                        href="https://github.com/Danielkioko18/School-Website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-warning mt-2"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
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
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group mb-3">
                      <input type="email" class="form-control" id="" placeholder="Your Email" name="from_email" required />
                    </div>

                    <div class="form-group mb-3">
                      <input type="Text" class="form-control" id="" placeholder="Your Name" name="from_name" required />
                    </div>

                    <div class="form-group mb-3">
                      <input type="Subject" class="form-control" id="" placeholder="Subject" name="subject" required />
                    </div>
                    
                    <div class="form-group mb-3">
                      <textarea class="form-control" id="Your Message" rows="3" placeholder="Your Message" name='message' required ></textarea>
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

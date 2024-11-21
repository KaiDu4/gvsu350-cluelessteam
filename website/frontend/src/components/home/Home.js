import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import downloadImage from "../home/download.jpg"
import image2 from "../home/download1.webp"
import image3 from "../home/download2.jpg"

function HomePage() {
  // initialise navigate
  const navigate = useNavigate()
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <Carousel className="message-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={downloadImage} // Replace with actual image URL
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3 className="h3-col">Welcome to EduBridge</h3>
            <p className="last">Empowering Educators for the Future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={image2} // Replace with actual image URL
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3 className="h3-col">Expand Your Knowledge</h3>
            <p className="last">Access Top-tier Teaching Materials and resources.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={image3} // Replace with actual image URL
            alt="carousel-image"
          />
          <Carousel.Caption>
            <h3 className="h3-col-l">Join a Community of Educators</h3>
            <p className="last">Collaborate and Connect with Peers Worldwide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sign-In Banner */}
      <Container className="sign-in-banner mt-4">
        <Row className="align-items-center">
          <Col md={8}>
            <h2>Already have an account?</h2>
            <p>Sign in to access to unlimited learning tools.</p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button onClick={() => navigate("/signin")} variant="primary" className="sign-in-button">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Public Templates Section */}
      {/* <Container className="public-templates-section mt-5">
        <Row className="align-items-center">
          <Col md={8}>
            <h1>Explore Teaching Templates</h1>
            <p>Designed to help you better prepare materials for class</p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button 
              onClick={() => navigate("/public-templates")} 
              variant="success" 
              className="public-templates-button"
            >
              Public Teaching Templates
            </Button>
          </Col>
        </Row>
      </Container> */}

    </div>
  );
}

export default HomePage;

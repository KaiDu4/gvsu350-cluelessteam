import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <Carousel className="message-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="" // Replace with actual image URL
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Welcome to EduBridge</h3>
            <p>Empowering learners for the future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="" // Replace with actual image URL
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Expand Your Knowledge</h3>
            <p>Access top-tier courses and resources.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="" // Replace with actual image URL
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Join a Community of Learners</h3>
            <p>Collaborate and connect with peers worldwide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sign-In Banner */}
      <Container className="sign-in-banner mt-4">
        <Row className="align-items-center">
          <Col md={8}>
            <h2>Already have an account?</h2>
            <p>Sign in to access your personalized dashboard and continue your learning journey.</p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button href="#signin" variant="primary" className="sign-in-button">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./public_tmp.css";
import "./templates.json";

function PublicTemplatesPage() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Simulate fetching template data from an API or JSON file
    const fetchTemplates = async () => {
      const response = await fetch("./templates.json"); // Replace with your actual data endpoint
      const data = await response.json();
      setTemplates(data);
    };

    fetchTemplates();
  }, []);

  return (
    <Container className="public-templates-page mt-5">
      <h1 className="text-center mb-4">Public Templates</h1>
      <Row>
        {templates.map((template) => (
          <Col key={template.id} md={4} className="mb-4">
            <Card className="template-card">
              <Card.Img 
                variant="top" 
                src={template.thumbnail} 
                alt={template.title} 
                className="template-thumbnail"
              />
              <Card.Body>
                <Card.Title>{template.title}</Card.Title>
                <Card.Text>{template.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    href={template.googleDocsLink}
                    target="_blank"
                    variant="primary"
                  >
                    Use in Google Docs
                  </Button>
                  <Button href={template.wordLink} download variant="success">
                    Download Word
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PublicTemplatesPage;

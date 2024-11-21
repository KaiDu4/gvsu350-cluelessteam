import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./public_tmp.css";
import data from "./templates.json";


function PublicTemplatesPage() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Resources</h1>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a
                  href={item.downloadLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <a
                  href={item.googleDocsLink}
                  className="btn btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default PublicTemplatesPage;

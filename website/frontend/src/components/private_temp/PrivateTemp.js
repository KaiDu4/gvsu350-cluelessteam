// src/components/TemplateForm.js
import React, { useState } from 'react';

const PrivateTemplateForm = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    downloadLink: '',
    googleDocsLink: '',
    previewImage: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Template Submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      category: '',
      description: '',
      downloadLink: '',
      googleDocsLink: '',
      previewImage: '',
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Create a Template</h1>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Template Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="downloadLink" className="form-label">
            Download Link
          </label>
          <input
            type="url"
            id="downloadLink"
            name="downloadLink"
            className="form-control"
            value={formData.downloadLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="googleDocsLink" className="form-label">
            Google Docs Link
          </label>
          <input
            type="url"
            id="googleDocsLink"
            name="googleDocsLink"
            className="form-control"
            value={formData.googleDocsLink}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="previewImage" className="form-label">
            Preview Image URL
          </label>
          <input
            type="url"
            id="previewImage"
            name="previewImage"
            className="form-control"
            value={formData.previewImage}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Template
        </button>
      </form>
    </div>
  );
};

export default PrivateTemplateForm;

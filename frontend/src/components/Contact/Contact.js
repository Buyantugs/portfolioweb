import React, { useState } from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    
    if (!formData.name) {
      errors.name = "Name is required";
    }
    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.message) {
      errors.message = "Message is required";
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.send(
      'service_57ybi7a',
      'template_fik7scl',
      formData,
      '8o7_0ZLgPUVd72eGk'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Reset form and errors on success
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }).catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <Container fluid className="about-section">
      <form className="wow pulse" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <input
                type="text"
                name="name"
                className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <input
                type="email"
                name="email"
                className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <textarea
                name="message"
                className={`form-control form-control-lg ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                rows="3"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
          </div>
        </div>
        <br></br>
        <div className="row text-md-right text-sm-center">
          <div className="col-12 col-sm-12 col-md-6 mx-auto">
            <button
              type="submit"
              className="btn btn-primary mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Contact;

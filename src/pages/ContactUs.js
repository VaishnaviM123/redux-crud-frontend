import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Contact() {
  return (
    <div style={{ backgroundColor: '#FFF9DE', overflowX: 'hidden' }}>
      <section className="contact-section pt-1 pb-5">
        <Row className="d-flex justify-content-between">
          <Col className="px-5 mt-5" md={6}>
            <h1 className="py-4 fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              CONTACT
            </h1>
            <p className="fs-5">
              For questions or inquiries you can reach out at{' '}
              <span style={{ color: 'black', fontWeight: '800', cursor: 'pointer' }}>
                contact@savorVue.com
              </span>{' '}
              or use the contact form.
            </p>
            <p className="fs-5">
              Save time and explore the FAQ for the information you need. If you can't find what you're
              looking for, feel free to reach out to the support team.
            </p>
            <Button variant="outline-light fs-5 rounded">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Button>
          </Col>
          <Col>
            <form className="contact-form px-5 mt-5 text-center">
              <div className="form-field">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Enter your Fullname"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="email"
                  className="form-control my-3"
                  placeholder="Enter your Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
                <Form.Control as="textarea" className="my-3" placeholder="Message" rows={3} />
              </div>
              <Button variant="dark py-2 px-5">Submit</Button>
            </form>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Contact;
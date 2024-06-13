import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [contactMethod, setContactMethod] = useState('Email');

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src="./mobile.png" alt="..." width='250px' height='350px' />
        </Col>
        <Col md={6}>
          <h2>Taste the best food, Download our APP</h2>
          <p>We will send you a link, open it on your phone to download the app</p>
          <Form>
            <div className="mb-3">
              <Form.Check
                inline
                label="Email"
                name="contactMethod"
                type="radio"
                checked={contactMethod === 'Email'}
                onChange={() => setContactMethod('Email')}
              />
              <Form.Check
                inline
                label="Phone"
                name="contactMethod"
                type="radio"
                checked={contactMethod === 'Phone'}
                onChange={() => setContactMethod('Phone')}
              />
            </div>
            <Form.Group controlId="contactInput">
              <Form.Control type="text" placeholder={contactMethod} />
            </Form.Group>
            <Button variant="danger" className="mt-3">Share App Link</Button>
          </Form>
          <div className="mt-4">
            <p>Download app from</p>
            <div className="d-flex">
              <img src="./gp.png" alt="Google Play" width='130px' height='50px' style={{marginRight:'10px'}} />
              <img src="./apple.png" alt="App Store" width='130px' height='50px' style={{marginRight:'10px'}} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
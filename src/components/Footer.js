import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Row className='pt-3 d-flex justify-content-around mx-0' style={{backgroundColor:'#FF1E1E'}}>
        <Col className='pt-3 px-0' md={3} sm={6} xs={12}>
          <h4 className='text-warning fw-bold'>Address</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8221054497953!2d75.78517327452425!3d11.347700848397768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65e19eb49b62f%3A0x50d05199c2b9dd3b!2sOloppara%20View%20Point%20Rd%2C%20Kozhikode%2C%20Kerala%20673317!5e0!3m2!1sen!2sin!4v1717329720593!5m2!1sen!2sin"
            width="90%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </Col>
        <Col className='pt-3 ps-4' md={3} sm={6} xs={12}>
          <h4 className='text-warning fw-bold'>Useful Links</h4>
          <Link to='/' className='text-white' style={{ textDecoration: 'none' }}><p>Landing Page</p></Link>
          <Link to='/menu' className='text-white' style={{ textDecoration: 'none' }}><p>Menu</p></Link>
          <Link to='/contactUs' className='text-white' style={{ textDecoration: 'none' }}><p>Contact Us</p></Link>
          <p className='d-flex fs-3 text-white'>
            <i className="fa-brands fa-whatsapp me-3"></i>
            <i className="fa-brands fa-facebook me-3"></i>
            <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-linkedin me-3"></i>
            <i className="fa-brands fa-youtube me-3"></i>
          </p>
        </Col>
        <Col className='pt-3 ps-4 text-white' md={3} sm={6} xs={12} style={{ lineHeight: '1' }}>
          <h4 className='text-warning fw-bold'>Hours</h4>
          <p className='fw-bold'>Monday & Tuesday</p>
          <p>10.00 AM - 11.00 PM</p>
          <p className='fw-bold'>Wednesday - Saturday</p>
          <p>11.00 AM - 10.00 PM</p>
          <p className='fw-bold'>Sunday</p>
          <p>5.00 PM - 9:30 PM</p>
        </Col>
      </Row>
      <p className='text-center py-2 my-0 bg-dark text-light fw-bold'>© 2024 SavorVue Technologies Pvt. Ltd</p>
    </div>
  );
}

export default Footer;
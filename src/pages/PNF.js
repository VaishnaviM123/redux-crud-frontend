import { Button, Row, Col, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

function PNF() {
  return (
    <div style={{backgroundColor:'#FFF9DE'}}>
      <Container className='text-center text-danger py-5' style={{fontFamily:'Spicy Rice, serif',fontSize:'150%'}}>
        <Row>
          <Col md={6} sm={12}><img src="./pnf.png" alt="..." width='100%' height='100%' /></Col>
          <Col md={6} sm={12} className='d-flex justify-content-center align-items-center flex-column'>
            <p style={{fontWeight:'900',fontSize:'300%',margin:'0px',padding:'0px'}}>404</p>
            <h1>Page not Found</h1>
            <p>Uh-oh! Looks like the page you are trying to access doesn't exist.</p>
            <p>Please start afresh.</p>
            <Link to='/'><Button variant='outline-danger'>Go Home</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PNF;
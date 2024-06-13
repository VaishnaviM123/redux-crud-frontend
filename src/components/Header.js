import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div style={{backgroundColor:'#FF1E1E',fontFamily:'Playfair Display, serif',color:'#FF8F00'}}>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="pb-2">
          <Container fluid>
            <Link to='/' style={{textDecoration:'none'}}>
              <h1>
                <img alt=""  src="./logo.png" width="80" height="60" />
                <span className='fw-bolder fs-1 ms-2' style={{color:'#FFDB00'}}>SavorVue</span>
              </h1>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pe-5">
              <Link to='/menu' className='ps-4 fs-5 fw-bold' style={{color:'#FFDB00',textDecoration:'none'}}>Menu</Link>
              <Link to='/contactUs' className='ps-4 fs-5 fw-bold' style={{color:'#FFDB00',textDecoration:'none'}}>Contact Us</Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
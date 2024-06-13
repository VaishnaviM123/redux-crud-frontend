import React from 'react'
import Application from '../components/Application'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Landing() {
  const navigate=useNavigate()
  return (
    <div>
      <div className='landing d-flex justify-content-center text-center align-items-center flex-column px-3' style={{color:'#FF8F00'}}>
        <div data-aos="zoom-in">
          <h1 style={{fontFamily:'Spicy Rice, serif',fontWeight:'400',letterSpacing:'5px',fontSize:'300%'}}>Where Food Meets Soul</h1>
          <h1 style={{fontFamily:'Playfair Display, serif',fontWeight:'600',fontSize:'150%'}}>We use the best regionally grown vegitables and foraged ingredients in out menu.</h1>
          <h1 style={{fontFamily:'Playfair Display, serif',fontWeight:'500',fontSize:'150%'}}>Acreative wine set, refreshing cocktails</h1>
        </div>
        <button className='btn-1' onClick={()=>navigate('/menu')}>VIEW MENU</button>
      </div>

      <Container>
        <Row className='my-5'>
          <Col md={5} sm={12}>
            <img src="https://i.postimg.cc/HLpCwk0w/pizza-landing.png" alt="..." width='100%' height='90%' data-aos="fade-in-out" />
          </Col>
          <Col md={7} sm={12} className='d-flex align-items-center justify-content-center flex-column text-center' data-aos="fade-left">
            <p className='fw-bolder shine1' style={{fontFamily:'Dancing Script, cursive',fontSize:'150%'}}>Limited Time offer just for Rs.40</p>
            <p style={{fontFamily:'Playfair Display, serif',fontWeight:'800',fontSize:'250%'}}>Hottest & Taste <span style={{color:'#FF1700',fontWeight:'800',fontSize:'230%'}}>PIZZA</span> <br />in this Town</p>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row className='d-flex align-items-center justify-content-center'> 
          <Col md={8} sm={12} className=' my-5 d-flex align-items-center flex-column justify-content-around' data-aos="fade-right">
            <p style={{fontFamily:'Playfair Display, serif',fontSize:'250%',fontWeight:'700',color:'#FF1700'}}>Delectable Cuisine on a Budget</p>
            <p className='fs-5' style={{fontWeight:'600'}}>Whether you're watching your calories or simply looking for mouthwatering dishes, savorVor offers delicious food choices that make you drool and keep you healthy. We specialize in vegan dishes and refreshing non-alcoholic beverages.</p>
            <Row className='pt-3 d-flex justify-content-center text-center'>
              <Col sm={4} xs={12}>
                <p className='fs-1 fw-bold'>5.0</p>
                <p className='fs-5' style={{fontWeight:'500'}}>Rating & Reviews</p>
              </Col>
              <Col sm={4} xs={12}>
                <p className='fs-1 fw-bold'>350+</p>
                <p className='fs-5' style={{fontWeight:'500'}}>Dishes Available</p>
              </Col>
              <Col sm={4} xs={12}>
                <p className='fs-1 fw-bold'>50+</p>
                <p className='fs-5' style={{fontWeight:'500'}}>Different Cuisines</p>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <img src="https://i.postimg.cc/hPSNvtnT/Screenshot-2024-06-13-093603.png" alt="..." width='100%' height='90%' data-aos="fade-in-out" />
          </Col>
        </Row>
      </Container>

      <div style={{backgroundColor:'#FFF9DE'}}><Application /></div>
    </div>
  )
}

export default Landing

import React, { useEffect } from 'react';
import { Container, Card, Button, Row, Col, Carousel, InputGroup, Form, Dropdown } from 'react-bootstrap';
import { Link, Trash2 } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu, removeMenuItem, searchMenuItem, sortByPrice, sortByRating } from '../redux/menuSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const items = useSelector(state => state.menu.allMenuItems);
    const { loading, error } = useSelector(state => state.menu);

    const removeItem = async(id)=>{
        try{
            const {meta} = await dispatch(removeMenuItem(id))
            if(meta.requestStatus==='fulfilled'){
                toast.success("Item deleted successfully.");
                dispatch(fetchMenu())
            }
        } catch (error) {
            toast.error('Item deleting failed.');
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    return (
        <div style={{ overflowX: 'hidden',backgroundColor:'#FFF4F4' }}>
            <Row style={{backgroundColor:'#FFEDDB'}} className='pb-5'>
                <Col md={4} sm={12} xs={12} className='pt-5'>
                    <Carousel className='custom-carousel'>
                        {['./c1.jpg', './c2.jpg', './c3.jpeg', './c4.jpeg', './c5.jpeg', './c6.jpg'].map((src, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={src} alt="..." width='100%' height='350px' />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={4} sm={12} xs={12} className='pt-5 d-flex align-items-center text-center justify-content-center flex-column'>
                    <h1 className='fw-bolder' style={{color:'#FF1E1E'}}>Welcome!</h1>
                    <h3 className='text-danger fw-bold'>Great to have you here</h3>
                    <p style={{fontSize:'115%',color:'#0C1844', fontWeight:'700',marginRight:'10px',marginLeft:'10px'}}>Embark on a culinary journey with us! Explore our diverse menu, discover dishes that entice your taste buds, and let's create memorable dining experiences together. We're here to inspire your inner food lover and serve you meals that you'll adore.</p>
                </Col>
                <Col md={4} sm={12} xs={12} className='pt-5'>
                    <Carousel className='custom-carousel'>
                        {['./c2.jpg', './c3.jpeg', './c4.jpeg', './c5.jpeg', './c6.jpg', './c1.jpg'].map((src, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={src} alt="..." width='100%' height='350px' />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Row className='justify-content-center my-5'>
                    <Col>
                        <h1 className='head text-center text-primary fw-bolder text-warning mt-4'>
                            <i className="fa-solid fa-utensils me-2 text-danger"></i> Our Delicious Menu
                        </h1>
                        <p className='lead fw-bold text-center px-3' style={{ color: '#FFA27F' }}>Discover a variety of dishes that will tantalize your taste buds</p>
                    </Col>
            </Row>

            <Container className='my-5'>
                <Form inline className="d-flex justify-content-end">

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-danger me-4" id="dropdown-basic"><i class="fa-solid fa-sliders"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>dispatch(sortByRating())}>Sort by Rating</Dropdown.Item>
                            <Dropdown.Item onClick={()=>dispatch(sortByPrice())}>Sort by Price</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <InputGroup className='shadow' style={{ borderRadius: '10px', width: '350px', border: '1px solid rgb(247, 212, 210)' }}>
                        <InputGroup.Text style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', position: 'absolute', zIndex: '1', top: '5px' }}>
                            <i className="fas fa-magnifying-glass"></i>
                        </InputGroup.Text>
                        <Form.Control type="search" placeholder="Search" className="ms-4" aria-label="Search"
                            onChange={(e) => dispatch(searchMenuItem(e.target.value))} style={{ outline: 'none', border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                    </InputGroup>

                </Form>
            </Container>
            
            <Container className='d-flex menus'>
                {['./All.png', './Biriyani.png', './BreakFast.png', './NonVeg.png', './Pizza.png', './Salad.png', './Drinks.png', './SouthIndian.png', './Icecream.png', './NorthIndian.png'].map((src, idx) => {
                    const name = src.split('/')[1].split('.')[0];
                    return (
                        <div key={idx} className='d-flex flex-column justify-content-center'>
                            <img src={src} alt="..." width='150px' height='150px' style={{borderRadius:'50%'}} onClick={() =>name=='All'? dispatch(searchMenuItem("")) : dispatch(searchMenuItem(name))} />
                            <p className='text-center'>{name}</p>
                        </div>
                    );
                })}
            </Container>


            <Container className='mt-2 mb-5 pb-5'>
                {loading ? (
                    <h1 className='text-warning text-center my-5'>
                        <i className="fa-solid fa-spinner fa-spin-pulse"></i> Loading
                    </h1>
                ) : error ? (
                    <h1 className='text-danger text-center my-5'>{error}</h1>
                ) : (
                   <Row className='d-flex justify-content-center'>
                        {items?.length > 0 ? (
                            items.map(i => (
                                <Col className='mt-5 d-flex justify-content-center'>
                                    <Card style={{ width: '18rem', height: '20rem',boxShadow:'rgba(0, 0, 0, 0.18) 0px 2px 4px'}} data-aos="zoom-in" data-aos-duration="1200" className='cont'>
                                        <div className='cont-1'>
                                            <img variant="top" src={i.iImage} width='100%' height='230px' alt={i.iName} />
                                            <Card.Body>
                                                <div className='d-flex justify-content-between'>
                                                    <Card.Title>{i.iName}</Card.Title>
                                                    <Card.Text className='p-2 bg-success d-flex align-items-center fs-5 fw-bold text-white' style={{ borderRadius: '10px', height: '25px' }}>
                                                        {i.iRating}<i className="fa-regular fa-star" style={{ fontSize: '10px' }}></i>
                                                    </Card.Text>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <Card.Title style={{ fontSize: '15px', fontWeight: '200' }}>{i.iKeywords?.length < 22 ? i.iKeywords : i.iKeywords.slice(0, 22) + '...'}</Card.Title>
                                                    <Card.Text><span className='fw-bold fs-5'>Rs:</span> <span className='fs-4 fw-bolder text-danger'>{i.iPrice}</span></Card.Text>
                                                </div>
                                            </Card.Body>
                                        </div>
                                        <div className='overlay'>
                                            <Button variant='p-0 m-0 text-white'  onClick={()=>navigate('/single-item', { state: { data: i } })}><i className="fa-solid fa-pen-to-square fs-4 p-0 m-0"></i></Button>
                                            <Button variant='p-0 m-0 text-white' onClick={()=>removeItem(i.id)}><Trash2 className='p-0 m-0 fw-bolder' /></Button>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                <h1 className='text-danger text-center mt-5'>No Item Found Yet!</h1>
                            </Col>
                        )}
                        <Col className='mt-5 d-flex justify-content-center'>
                            <Card style={{ width: '18rem', height: '20rem',boxShadow:'rgba(0, 0, 0, 0.18) 0px 2px 4px' }} data-aos="zoom-in" data-aos-duration="1200" className='d-flex align-items-center justify-content-center fs-1 fw-bold'>
                                <i class="fa-solid fa-plus text-danger fs-1" onClick={()=>navigate('/single-item')}></i>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default Menu;
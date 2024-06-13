import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row, InputGroup, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToMenu, updateMenu } from '../redux/menuSlice';
import { updateItemAPI } from '../services/AllApis';

function Add() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [editMode, setEditMode] = useState(false);
    const [itemData, setItemData] = useState({
        iName: "",
        iImage: "",
        iPrice: "",
        iCategory: "",
        iRating: "",
        iKeywords: ""
    });
    const [id, setId] = useState(null);

    const setData = (e) => {
        let { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const clearData = () => {
        setItemData({
            iName: "",
            iImage: "",
            iPrice: "",
            iCategory: "",
            iRating: "",
            iKeywords: ""
        });
    };

    const addData = async () => {
        const { iName, iImage, iPrice, iCategory } = itemData;
        if (!iName || !iImage || !iPrice || !iCategory) {
            toast.warning("Fill all data");
        } else {
            try {
                await dispatch(addToMenu(itemData));
                clearData();
                toast.success("Item added successfully.");
                navigate('/menu');
            } catch (error) {
                toast.error('Item adding failed.');
                console.log(error);
            }
        }
    };

    const updateData = async () => {
        const { iName, iImage, iPrice, iCategory } = itemData;
        if (!iName || !iImage || !iPrice || !iCategory) {
            toast.warning("Fill all data");
        } else {
            try {
                // await dispatch(updateMenu({ id, itemData }));
                await updateItemAPI(id,itemData)
                clearData();
                toast.success("Item updated successfully.");
                setEditMode(false);
                navigate('/menu');
            } catch (error) {
                toast.error('Item updating failed.');
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (location.state && location.state.data) {
            setItemData(location.state.data);
            setEditMode(true);
            setId(location.state.data.id);
        }
    }, [location.state]);

    return (
        <div style={{ backgroundColor: '#FFF9DE' }}>
            <Link to='/menu' style={{textDecoration:'none',color:'#ff0000'}} className='fs-4 fw-bold m-5'><i class="fa-solid fa-angles-left"></i> Back to Menu</Link>
            <Row className='py-5 d-flex'>
                <Col md={6} sm={12} className='py-4 d-flex justify-content-center align-items-center'>
                    <img src={itemData.iImage ? itemData.iImage : "./food.png"} alt=".." width='60%' height='65%' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col  md={6} sm={12}>
                    <h1 className='text-center py-4 fs-1' style={{color:'#ff0000'}}>{editMode ? 'Update' : 'Add'} Details</h1>
                    <Container>
                        <Form>
                            <FloatingLabel controlId="floatingInput" label="Item Name" className="mb-3 p-0">
                                <Form.Control type="text" value={itemData.iName} placeholder="Item Name" name="iName" onChange={setData} style={{ boxShadow: 'none', backgroundColor: 'transparent' }} required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Item Image Url" className="mb-3 p-0">
                                <Form.Control type="text" value={itemData.iImage} placeholder="Item Image Url" name="iImage" onChange={setData} style={{ boxShadow: 'none', backgroundColor: 'transparent' }} required />
                            </FloatingLabel>

                            <InputGroup>
                                <Form.Select name="iCategory" value={itemData.iCategory} onChange={setData} style={{ marginBottom: '14px', boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <option value="">Select Category</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Drinks">Drinks</option>
                                    <option value="Starter">Starter</option>
                                </Form.Select>
                            </InputGroup>

                            <FloatingLabel controlId="floatingInput" label="Item Price" className="mb-3 p-0">
                                <Form.Control type="text" value={itemData.iPrice} placeholder="Item Price" name="iPrice" onChange={setData} style={{ boxShadow: 'none', backgroundColor: 'transparent' }} required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Item Rating" className="mb-3 p-0">
                                <Form.Control type="text" value={itemData.iRating} placeholder="Item Rating" name="iRating" onChange={setData} style={{ boxShadow: 'none', backgroundColor: 'transparent' }} required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Keywords" className="mb-3 p-0">
                                <Form.Control type="text" value={itemData.iKeywords} placeholder="Keywords" name="iKeywords" onChange={setData} style={{ boxShadow: 'none', backgroundColor: 'transparent' }} required />
                            </FloatingLabel>

                            <Container className='d-flex justify-content-center pt-3' style={{ gap: '30px' }}>
                                {!editMode && <Button variant="outline-danger px-5" onClick={clearData}>Clear</Button>}
                                <Button variant="outline-success px-5" onClick={editMode ? updateData : addData}>{editMode ? "Update Item" : "Add Item"}</Button>
                            </Container>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}

export default Add;

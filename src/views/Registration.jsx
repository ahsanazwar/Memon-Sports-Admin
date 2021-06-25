import React from "react";
import {Container,Row,Col,Form} from 'react-bootstrap';

function Registration() {
    return(
        <>
        <div className="inner-page-banner">
            <Container>
                <Row>
                    <Col lg={12}>
                    <h1>Registration</h1>
                    </Col>
                </Row>
            </Container>        
        </div>  
        <form className="registration-form">
            <Container>
                <Row className="justify-content-center">
                        <Col lg={6} className="registration-form-wrapper">
                            <Row>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Father Name" />
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Surname Name" />
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Nic Number" />
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Date of Birth" />
                            </Col>
                            
                            <Col lg={12}>
                              <Form.Control as="select">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Shirt Size" />
                            </Col>

                            <Col lg={12}>
                                <div className="profile-image">
                                    <span>Upload Player Image</span>
                                    <Form.Control type="file" placeholder="Shirt Size" />
                                </div>
                            </Col>

                            <Col lg={12}>
                                <Form.Control type="number" placeholder="Enter Phone Number" />
                            </Col>
                            
                            <Col lg={12}>
                            <Form.Control as="select">
                                    <option>Memon</option>
                                    <option>Sindhi</option>
                                    <option>Behari</option>
                                </Form.Control>
                            </Col>
                            
                            <Col lg={12}>
                                <Form.Control as="select">
                                    <option>Cricket</option>
                                    <option>Football</option>
                                    <option>Basket ball</option>
                                </Form.Control>
                            </Col>
                            
                            <Col lg={12}>
                                <div className="mb-3">
                                <Form.Check inline label="Batsman" name="group1" type='checkbox' />
                                <Form.Check inline label="Bowler" name="group1" type='checkbox'/>
                                <Form.Check inline label="Wicket Keeper" name="group1" type='checkbox'/>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <button type="submit">Registration</button>
                            </Col>
                        </Row>
                        </Col>
                </Row>
            </Container>    
        </form>
        </>
    )
}

export default Registration;
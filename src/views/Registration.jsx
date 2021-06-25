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
                <Row>
                    <Col lg={2}>
                        <Form.Label>Name:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Father Name:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Surname:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Nic Number:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Date of Birth:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Genter:</Form.Label>
                    </Col>
                    <Col lg={10}>
                       <Form.Control as="select">
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Email:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Phone Number:</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <Form.Control type="number" placeholder="Enter Phone Number" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Jamat Name</Form.Label>
                    </Col>
                    <Col lg={10}>
                       <Form.Control as="select">
                            <option>Memon</option>
                            <option>Sindhi</option>
                            <option>Behari</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Select Sports</Form.Label>
                    </Col>
                    <Col lg={10}>
                       <Form.Control as="select">
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Basket ball</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <Form.Label>Specialization</Form.Label>
                    </Col>
                    <Col lg={10}>
                        <div className="mb-3">
                        <Form.Check inline label="Batsman" name="group1" type='checkbox' />
                        <Form.Check inline label="Bowler" name="group1" type='checkbox'/>
                        <Form.Check inline label="Wicket Keeper" name="group1" type='checkbox'/>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </form>
        </>
    )
}

export default Registration;
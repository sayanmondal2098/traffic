import React, { Component } from 'react';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';
import "../../css/Styles.css";
import Banner from '../Banner/Banner';

class SignUp extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    {/* left container */}
                    <Banner />

                    {/* right container */}
                    <Col lg = {5} md = {7} className = 'px-0'>
                        <Container className = 'sign-up-container d-flex justify-content-center vh-100'>
                            <Row className = 'align-content-between align-items-center'>
                                <Col lg = {12} md = {12} className = 'sign-up-header mb-4'>
                                    <div>
                                        {/* LOGO */}
                                        [Company's Logo]
                                    </div>
                                    <Button onClick = {() => this.props.history.push('/login')} type = 'primary' className = 'custom-btn secondary'>Already have an account?</Button>
                                </Col>
                                <Col lg = {12}>
                                    <h2 className = 'mb-4 custom-text primary bold'>Sign Up.</h2>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="phone" placeholder="Enter Phone Number" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="Enter City" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Longitude</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Longitude" />
                                            </Form.Group>
                                            <Form.Group as = {Col}>
                                                <Form.Label>Latitude</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Latitude" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="Agree to Terms of Use and Privacy Policy" />
                                        </Form.Group>
                                       
                                        <Button type = 'submit' className = 'custom-btn primary mb-4' >Sign Up</Button>
                                    </Form>
                                </Col>
                                <Col lg = {12} className = 'text-center'>
                                    © 2020 Traffic Inc. All rights reserved
                                </Col>
                            </Row>
                           
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignUp

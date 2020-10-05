import React, { Component } from 'react';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';
import "../../css/Styles.css";
import Banner from '../Banner/Banner';

class Login extends Component {

    render() {
        console.log(this.props)
        return (
            <Container fluid>
                <Row>
                    {/* left container */}
                    <Banner />

                    {/* right container */}
                    <Col lg = {5} md = {7} className = 'px-0'>
                        <Container className = 'login-container d-flex justify-content-center vh-100'>
                            <Row className = 'align-content-between align-items-center'>
                                <Col lg = {12} md = {12} className = 'login-header mb-4'>
                                    <div>
                                        {/* LOGO */}
                                        [Company's Logo]
                                    </div>
                                    <Button type = 'primary'  onClick = {() => this.props.history.push('/sign-up')} className = 'custom-btn secondary'>Don't have an account?</Button>
                                </Col>
                                <Col lg = {12}>
                                    <h2 className = 'mb-4 custom-text primary bold'>Login.</h2>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Row >
                                            <Form.Group as = {Col}>
                                                <Form.Check type="checkbox" label="Remember Me" />
                                            </Form.Group>
                                            <Form.Group as = {Col} className = 'd-flex justify-content-end'>
                                                <a className = 'custom-text primary' href = '/'>Forgot Password?</a>
                                            </Form.Group>
                                        </Form.Row>
                                        <Button type = 'submit' className = 'custom-btn primary mb-4'>Login</Button>
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

export default Login

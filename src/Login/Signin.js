import React, { Component } from 'react'
import "../css/Signin.css"
import { Link, Redirect } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import axios from "axios";
import { SERVER_IP } from "../Keys";


export default class Signin extends Component {
    constructor(props) {
        super(props);
        const traffic_session_token = localStorage.getItem("traffic_session_token")
        let trafficLoggedIn = true;
        if (traffic_session_token == null) {
            trafficLoggedIn = false;
        }

        this.state = {
            username: "",
            password: "",
            trafficLoggedIn
        };
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.login_seller()
        // if (this.validation()) {
        //     this.login_seller();
        // }
    };

    login_seller() {
        axios
            .post(
                SERVER_IP +
                `/loginTrafficAdmin?password=${this.state.password}&username=${this.state.username}`
            )
            .then((response) => {
                this.responseController(response);
                // console.log(response);  
            })
            .catch((error) => {
                console.log(error);
            });
    }

    errormsg(sms){
        console.log(sms)
    }

    responseController(response) {
        if (response.status === 200) {
            if (response.data.existence_check === "not_found") {
                this.errormsg("err_email", "Email does not exist. Sign Up first");
            } else {
                if (response.data.status === "success") {
                    //   localStorage.setItem("seller_session_token",makeid(15));
                    console.log(response)
                    localStorage.setItem("traffID", response.data.traffID);
                    this.setState({
                        trafficLoggedIn: true
                    })
                } else {
                    console.log(response)
                    this.errormsg("err_name", "Invalid login credentials");
                    ;
                }
            }
        }
    }


    render() {
        if (this.state.trafficLoggedIn) {
            return <Redirect to="/gmap" />
        }
        return (
            <div className='body__signin'>
                <div className="container container__signin">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 d-flex justify-content-center flex-column align-items-center col-md-6__signin">
                            <img id="img" src="https://linkpicture.com/q/31e9Y7Ob5wL_1.png" alt="background" />
                            <h2 className="text-center" id="h2__signin">Sign In</h2>
                            <form onSubmit={this.handleSubmit}>


                                <input
                                    className="form-control form__signin"
                                    autoComplete="off"
                                    name="Email"
                                    placeholder="E-mail Id / Phone No."
                                    maxLength="50"
                                    value={this.state.username}
                                    onChange={this.handleUserNameChange} />

                                <input
                                    autoComplete="off"
                                    type="password"
                                    className="form-control form__signin"
                                    name="password"
                                    placeholder="Password"
                                    minLength="8"
                                    maxLength="50"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                                <input type="submit" value="continue" className="btn btn-info btn__signin" />

                                <div className="d-flex justify-content-center flex-column align-items-center">
                                    
                                    <div className="notmember__signup">
                                        <h6>Not a memeber?&nbsp;&nbsp;<Link to="/signup"><span>Sign Up</span></Link></h6>
                                    </div>
                                    <Link to="/"><HomeIcon id="home__icon"></HomeIcon></Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>

        )
    }
}

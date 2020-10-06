import React, { Component, useEffect } from 'react'
import "../css/Signup.css"
import { Link } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Signup() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById("lat").value = position.coords.latitude
            console.log("Latitude is :", position.coords.latitude);
            document.getElementById("long").value = position.coords.longitude
            console.log("Longitude is :", position.coords.longitude);
        });
    })
    return (
        <div className="body__signup d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column col-12 flex-md-row container__signup">
                <div className="col-md-1"></div>
                <div className="d-flex justify-content-center flex-column col-md-4 Card__signup__container">
                    <div className="card mb-3 Card__signup d-flex justify-content-center flex-column align-items-center">
                        <div className="card-header bg-transparent border-success" id="welcome">WELCOME</div>
                        <div className="card-body text-success card__body d-flex justify-content-center flex-column">
                            <p className="card-text card__text">
                                <p><ArrowRightAltIcon></ArrowRightAltIcon>&nbsp;&nbsp;Enter Details</p>
                                <p><ArrowRightAltIcon></ArrowRightAltIcon>&nbsp;&nbsp;Register</p>
                                <p><ArrowRightAltIcon></ArrowRightAltIcon>&nbsp;&nbsp;Wait for Verification</p>
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-success" id="service">START YOUR SERVICE TO HUMANITY</div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="d-flex justify-content-center align-items-center col-md-5 form_signup">
                    <div className="signup-form d-flex justify-content-center align-items-center flex-column">
                        <img id="img" src="https://linkpicture.com/q/31e9Y7Ob5wL_1.png" alt="background" />

                        <h1 className="text-center" id="h1__signup">Sign Up</h1>
                        <form action="/examples/actions/confirmation.php" method="post" className="form_signup_layout d-flex justify-content-center align-items-center flex-column">
                            <div class="form-group">
                                <div className="row flex-md-row flex-column">
                                    <div className="col"><input type="text" className="form-control form__signup" name="first_name" placeholder="First Name" required="required" autoComplete="off"></input></div>
                                    <div className="col"><input type="text" className="form-control form__signup" name="last_name" placeholder="Last Name" required="required" autoComplete="off"></input></div>
                                </div>
                            </div>
                            <div className="NameEmailPhoneCity">
                                <div className="form-group">
                                    <input type="email" className="form-control form__signup" name="email" placeholder="Email" required="required" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <input type="phone" className="form-control form__signup" name="phone" placeholder="Phone" required="required" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form__signup" name="password" placeholder="Password" required="required" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <input type="city" className="form-control form__signup" name="city" placeholder="City" required="required" autoComplete="off"></input>
                                </div>
                            </div>
                            <div className="row flex-md-row flex-column">
                                <div className="col"><input type="text" className="form-control form__signup" name="latitude" placeholder="Latitude" required="required" autoComplete="off" id="lat"></input></div>
                                <div className="col"><input type="text" className="form-control form__signup" name="longitude" placeholder="Longitude" required="required" autoComplete="off" id="long"></input></div>
                            </div>
                            <a href="#"><div className="btn btn-info btn__signup">Sign Up</div></a>
                            <div className="member__signin d-flex justify-content-center flex-column align-items-center">
                                <h6>Already a memeber?&nbsp;&nbsp;<Link to="/signin"><span>Sign In</span></Link></h6>
                                <Link to="/"><HomeIcon id="home__icon"></HomeIcon></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
export default Signup
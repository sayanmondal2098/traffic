import React, { Component } from 'react'
import "../css/Signin.css"
import { Link } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

// Material UI Components
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    SvgIcon,
    TextField,
    Typography,
} from '@material-ui/core'

export default class Signin extends Component {
    render() {
        return (
            <div className='body__signin'>
                <div className="container container__signin">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 d-flex justify-content-center flex-column align-items-center col-md-6__signin">
                            <img id="img" src="https://linkpicture.com/q/31e9Y7Ob5wL_1.png" />
                            <h2 className="text-center" id="h2__signin">Sign In</h2>
                            <form>
                                <input autoComplete="off" type="email" className="form-control form__signin" name="Email" placeholder="E-mail Id / Phone No." maxLength="50" />
                                <input autoComplete="off" type="password" className="form-control form__signin" name="password" placeholder="Password" minLength="8" maxLength="50" />
                                <div className="d-flex justify-content-center flex-column align-items-center">
                                    <a href="#"><div className="btn btn-info btn__signin">Sign In</div></a>
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

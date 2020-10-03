import React, { Component } from 'react';
import "../css/FrontHome.css";
import { Button, Container, Grid } from '@material-ui/core';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import Particles from 'react-particles-js';

export class FrontHome extends Component {
    anim() {
        for (let index = 0; index < 100; index++) {


        }
    }

    render() {
        return (
            <div className="FrontHome">
                <div className="FrontHome__container">
                    {/* <img 
                    className="FrontHome__image"
                    src="https://images.unsplash.com/photo-1547269257-ee55681ca2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=600"
                    alt ="Banner"
                    /> */}
                    <div className="FrontHome__banner">
                        {/* <Particles width="100%" height="15%"/> */}
                        <div className="FrontHome__slag">

                            {/* <ParticleAnimation /> */}
                            <div className="FrontHome__words">
                                Welcome to
                                <br></br>
                                    Google Maps Platform
                                <br></br>
                                <div className="FrontHome__slagsmall">
                                    Explore where real-world insights and immersive location experiences can take your business
                                </div>
                                <Button variant="contained" color="primary">
                                    Know More
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* The Stats */}
                    <div className="FrontHome__stat">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div className="FrontHome__statBox">
                                        99% <br></br>
                                    coverage of the world
                                    </div>
                                    <div>
                                        Build with reliable, comprehensive data<br></br> for over 200 countries and territories.
                                </div>
                                </div>
                                <div class="col-sm">
                                    <div className="FrontHome__statBox">
                                        25 million <br></br>
                                updates daily
                                    </div>
                                    <div>
                                        Count on accurate, real-time location information.
                                </div>
                                </div>
                                <div class="col-sm">
                                    <div className="FrontHome__statBox">
                                        1 billion <br></br>
                                monthly active users
                                </div>
                                    <div>
                                        Scale confidently, backed by our infrastructure.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* The New Horaizon */}
                    <div className="FrontHome__horizons">
                        <div className="container">
                            {/* <div className="row"> */}
                            <div className="">
                                <div className="FrontHome__horizonsHeading">
                                    Explore new horizons
                                    </div>
                                <div className="FrontHome__horizonsWrite">
                                    Learn about our latest products. Plus, look back at Maps moments and innovations created over 15 years of mapping the world.
                                    </div>
                                <div className="FrontHome__whatsNewButton ">
                                    <Button variant="contained" color="primary" className="FrontHome__whatsNewButton">
                                        SEE WHAT'S NEW
                                    </Button>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* See Latest */}
                    <div className="FrontHome__seeLatest">
                        <div className="container">
                            <div className="row">
                                
                            <div className="col-sm">
                                    <div className="FrontHome__seeLatestCard">
                                        <div className="FrontHome__seeLatestCardImg">
                                            <img
                                                className="FrontHome__seeLatestCardImgProp"
                                                src="https://images.unsplash.com/photo-1547269257-ee55681ca2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=600"
                                                alt="Banner" />
                                        </div>
                                        <div className="FrontHome__seeLatestCardHeading">
                                            Maps Customization
                                        </div>
                                        <div className="FrontHome__seeLatestCardBody">
                                        Help your business stand out with a suite of new customization and styling features. Plus, map customization and management is now available via the Cloud Console, enabling real-time updates across multiple platforms and devices - without changing a line of code.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="FrontHome__seeLatestCard">
                                        <div className="FrontHome__seeLatestCardImg">
                                            <img
                                                className="FrontHome__seeLatestCardImgProp"
                                                src="https://images.unsplash.com/photo-1547269257-ee55681ca2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=600"
                                                alt="Banner" />
                                        </div>
                                        <div className="FrontHome__seeLatestCardHeading">
                                            Maps Customization
                                        </div>
                                        <div className="FrontHome__seeLatestCardBody">
                                        Help your business stand out with a suite of new customization and styling features. Plus, map customization and management is now available via the Cloud Console, enabling real-time updates across multiple platforms and devices - without changing a line of code.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="FrontHome__seeLatestCard">
                                        <div className="FrontHome__seeLatestCardImg">
                                            <img
                                                className="FrontHome__seeLatestCardImgProp"
                                                src="https://images.unsplash.com/photo-1547269257-ee55681ca2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=600"
                                                alt="Banner" />
                                        </div>
                                        <div className="FrontHome__seeLatestCardHeading">
                                            Maps Customization
                                        </div>
                                        <div className="FrontHome__seeLatestCardBody">
                                        Help your business stand out with a suite of new customization and styling features. Plus, map customization and management is now available via the Cloud Console, enabling real-time updates across multiple platforms and devices - without changing a line of code.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FrontHome

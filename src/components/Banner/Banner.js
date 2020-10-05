import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import "../../css/Styles.css";

class Banner extends Component {

    render() {
        return (
          
            <Col lg = {7} md = {5} className = 'px-0 vh-100 bg-image'>
            
                <div className = 'overlay'>
                    <div className = 'wording'>
                        {/* ypur company name */}
                        <h1 className = 'custom-text'>
                            <span>Traffic.</span>
                        </h1>

                        {/* your company value/desc */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mollis neque, eu vestibulum mi sollicitudin in. Suspendisse vel semper dui. Cras bibendum leo vitae velit accumsan vestibulum</p>
                    </div>
                </div>
            </Col>
               
        )
    }
}

export default Banner

import React, { Component } from 'react'
import FrontHome from '../../FrontBody/FrontHome'
import Header from '../../Header/Header'

class Home extends Component {
    render(){
        return(
            <>
                <Header/>
                <FrontHome />
            </>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Signin from "../Login/Signin";
import Signup from "../Login/Signup";
import Googlemap from "../Dashboard/Googlemap";
import Admin from "../Dashboard/DashTheBoard/layouts/Admin";

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                <Route path="/gmap" component={Googlemap} />
                <Route path="/admin/dashboard" component={Admin} />
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>

                <Route path="/" component={Home} />
                
    
              </Switch>
          </BrowserRouter>
        )
    }
}

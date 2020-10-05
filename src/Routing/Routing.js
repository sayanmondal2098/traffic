import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} />
    
              </Switch>
          </BrowserRouter>
        )
    }
}

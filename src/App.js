import React from "react";
import Header from "./Header/Header";
import FrontHome from "./FrontBody/FrontHome";
import Signin from "./Login/Signin";
import SignUp from "./SignUp";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>Hello Programmers</h1> */}
        <Header />
        {/* Home */}
        <div className="App">
          <Switch>
            <Route path="/" component={FrontHome} exact />
            <Route path="/login" component={Signin} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

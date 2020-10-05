import React from 'react';
import Header from './Header/Header';
import FrontHome from "./FrontBody/FrontHome";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Header />
            <FrontHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

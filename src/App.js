import React from 'react';
import Header from './Header/Header';
import FrontHome from "./FrontBody/FrontHome";
import Signin from "./Login/Signin";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Programmers</h1> */}

      <Header/>
      {/* Home */}
      <FrontHome/>





      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/login" component={Signin} />

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

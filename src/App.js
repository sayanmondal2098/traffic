import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path = '/sign-up' component = {SignUp}/>
          <Route path = '/' exact component = {Home}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

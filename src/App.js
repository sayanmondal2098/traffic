import React from 'react';
import Header from './Header/Header';
import FrontHome from "./FrontBody/FrontHome";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Programmers</h1> */}

      <Header/>
      {/* Home */}
      <FrontHome/>
    </div>
  );
}

export default App;

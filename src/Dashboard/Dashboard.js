import React, { Component } from 'react'
import Googlemap  from "./Googlemap";
// import Signin  from "../Login/Signin"; 
import "../css/Dashboard/Dashboard.css";
export class Dashboard extends Component {


  render() {

    return (
      <div className="container-small">
        <div className="">
          <div id="viewport">
            {/* <!-- Sidebar --> */}
            <div id="sidebar">
              <header>
                <a href="#">My App</a>
              </header>
              <ul class="nav">
                <li>
                  <a href="#">
                    <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                </a>
                </li>



              </ul>
            </div>
            {/* <!-- Content --> */}
            <div id="content">
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <ul class="nav navbar-nav navbar-right navbar__right">
                    <li><a href="#">Test User</a></li>
                  </ul>
                </div>
              </nav>
              <div class="container-fluid">
                <div className="googleMap">
                  <Googlemap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
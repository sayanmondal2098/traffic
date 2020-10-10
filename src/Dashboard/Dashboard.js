import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//     Polyline
//   } from "react-google-maps";

import { GOOGLE_MAP_API_KEY } from "../Keys";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

import {Map, InfoWindow, Polyline,Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Dashboard extends Component {
    
     
  render() {
    
      return(
       <div>
           Hello
       </div>
    );
  }
}
 
export default Dashboard;
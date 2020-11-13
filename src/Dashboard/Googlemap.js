import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//     Polyline
//   } from "react-google-maps";
import axios from "axios";
import { SERVER_IP, GOOGLE_MAP_API_KEY } from "../Keys";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

import { Map, InfoWindow, Polyline, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Googlemap extends Component {
  constructor(props) {
    super(props)
    const traffic_session_token = localStorage.getItem("traffic_session_token")
    const traffID = localStorage.getItem("traffID")
    let trafficLoggedIn = true;
    if (traffic_session_token == null) {
      trafficLoggedIn = false;
    }

    this.state = {
      trafficLoggedIn,
      traffID: traffID,
      trafficAmbul: "",
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    var alldata = []
    axios
      .post(
        SERVER_IP +
        `\getAmbulanceTraffic?traffID=${this.state.traffID}`
      )
      .then((res) => {
        // console.log(res)
        var ambul = res['data']['activeSOS']
        console.log(ambul.length)
        for (let index = 0; index < ambul.length; index++) {
          console.log(ambul[index]['hospital_name'])
          alldata.push(ambul[index])

        }
        this.setState({
          trafficAmbul : alldata
        })
      }
      )
      .catch((error) => {
        console.log(error)
      })
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    // console.table( (this.state.trafficAmbul))
    var result = Object.entries(this.state.trafficAmbul);
    // console.log((result[0].otp))
    console.table(result[1])
    // console.log(result[1][0]["otp"])
    return (
      <div>
        <ul>
          {result.map(item => (
            <li key={item}>
              otp: {item[1].otp}
            </li>
          ))}

        </ul>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAP_API_KEY)
})(Googlemap)
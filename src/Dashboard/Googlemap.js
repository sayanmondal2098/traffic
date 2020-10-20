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
      traffID : traffID ,
      trafficAmbul : []
      // len : undefined,
      // vehicle_regno: undefined,
      // pickupCoord : undefined,
      // dropClock : undefined,
      // vehicle_location : undefined,
      // otp: undefined,
      // driver_phone: undefined,
      // pickupClock : undefined,
      // driver_name : undefined,
      // sos_status : undefined,
      // hospital_name: undefined,
      // hospital_location : undefined,
      // hospital_phone : undefined,
      // hospital_address: undefined,
      // driver_image : undefined,
      // txnID : undefined,
      // requestClock : undefined
    };
  }

  componentDidMount(){
    const list = []
    axios
    .post(
      SERVER_IP+
      `\getAmbulanceTraffic?traffID=${this.state.traffID}`
    )
    .then((res)=>{
      console.log(res)
      var ambul = res['data']['activeSOS']
      console.log("xxxxxxxxxxxxx"+ambul.length)
      for (let index = 0; index < ambul.length; index++) {
        this.state.trafficAmbul.push(ambul[index])
        
      }
    }
    )
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({trafficAmbul : data.activeSOS})
    // })
    .then(
      console.log("0000000000"),
      console.log(this.state.trafficAmbul)
    )
    .then(console.log(this.state.trafficAmbul))
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
    const triangleCoords = [
      { lat: 25.774, lng: -80.190 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.190 }
    ];
    return (
      <Map google={this.props.google}
        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAP_API_KEY)
})(Googlemap)
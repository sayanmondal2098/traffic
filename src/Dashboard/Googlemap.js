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
 
export class Googlemap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
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
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
      ];
      return(
        <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAP_API_KEY)
})(Googlemap)
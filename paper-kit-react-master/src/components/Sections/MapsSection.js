import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

let postal = "";
let car = {};
let googleKey = process.env.REACT_APP_GOOGLE_KEY;

function Map() {
  const [localLat, setLocalLat] = useState(0);
  const [localLng, setLocalLng] = useState(0);

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${postal}&key=${googleKey}`
    )
    .then(res => {
      setLocalLat(res.data.results[0].geometry.location.lat);
      setLocalLng(res.data.results[0].geometry.location.lng);
    });


  return (
    <GoogleMap defaultZoom={10} center={{ lat: localLat, lng: localLng }}>
      <Marker key={car.make} position={{ lat: localLat, lng: localLng }} />
      <InfoWindow position={{ lat: localLat, lng: localLng }}>
        <div>
          <img src={car.listing_image} width="75px"></img>
          <h4>
            {car.year} {car.make} {car.model}
          </h4>
          <p>$ {car.price}</p>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapsSection(props) {

  postal = props.data.city;
  car = props.data;
  console.log(props.data);

  return (
    <>

      <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleKey}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </>
  );
}
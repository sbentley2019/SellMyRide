import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SearchPageHeader from "components/Headers/SearchPageHeader.js";
import ResultSection from "components/Sections/ResultSection.js";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import {GoogleMap, 
        withScriptjs, 
        withGoogleMap, 
        Marker, 
        InfoWindow
      } from "react-google-maps";

let something = [];
axios.get('https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:M6E4B1&key=AIzaSyAd-HZuVuAhjBHtKFlApJuXh9dvcD2yIzk')


function Map() {

  const [selectedPark, setSelectedPark] = useState(null);

  return ( 
     <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 43.653225, lng: -79.383186}}
    >
 {/*      {something.features.map((park) => (
        <Marker 
        key={park.properties.PARK_ID} 
        position={{lat: park.geometry.coordinates[1], lng: park.geometry.coordinates[0]
        }} 
        onClick={() => {
          setSelectedPark(park);
        }}
        icon={{
          url: "/apple-icon.png",
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
        position={{lat: selectedPark.geometry.coordinates[1], lng: selectedPark.geometry.coordinates[0]}}
        onCloseClick={() => {setSelectedPark(null)}}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));


function SearchPage() {
  const [results, setResults] = useState([]);
  const [cookies, setCookie] = useCookies(["name", "user_id"]);

  useEffect(() => {}, [results]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <SearchPageHeader setResults={results => setResults(results)} />
      {results.length !== 0 && <ResultSection results={results} />}
      <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAd-HZuVuAhjBHtKFlApJuXh9dvcD2yIzk`}
        loadingElement={<div style={{ height: "100%"}} />}
        containerElement={<div style={{ height: "100%"}} />}
        mapElement={<div style={{ height: "100%"}} />}
        />
      </div>
    </>
  );
}

export default SearchPage;

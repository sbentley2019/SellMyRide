import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewVehicleListingHeader from "components/Headers/NewVehicleListingHeader.js";
import VehicleProfileCarousel from "components/Sections/VehicleProfileCarousel.js";
import VehicleProfileDescription from "components/Sections/VehicleProfileDescription.js";
import {useLocation} from "react-router-dom";

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
import axios from "axios";


import {GoogleMap, 
  withScriptjs, 
  withGoogleMap, 
  Marker, 
  InfoWindow
} from "react-google-maps";

let postal = "";
let car = {};


function Map() {

const [localLat, setLocalLat] = useState(0);
const [localLng, setLocalLng] = useState(0);

axios.get('https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' + postal + '&key=[GOOGLE_KEY]').then(res => {
  setLocalLat(res.data.results[0].geometry.location.lat);
  setLocalLng(res.data.results[0].geometry.location.lng);
});

console.log(localLat, localLng);

return ( 
  <GoogleMap 
  defaultZoom={10} 
  center={{ lat: localLat, lng: localLng}}
  >

  <Marker 
  key={car.make} 
  position={{lat: localLat, lng: localLng
  }} 


  />
 <InfoWindow
 position={{lat: localLat, lng: localLng}}
 >
   <div>
     <img src={car.listing_image} width="75px"></img>
     <h4>{car.year} {car.make} {car.model}</h4>
     <p>$ {car.price}</p>
   </div>
 </InfoWindow>

</GoogleMap>
);


};



const WrappedMap = withScriptjs(withGoogleMap(Map));  


function VehicleListing() {
  let data = useLocation();
  postal = data.state.result.city;
  car = data.state.result;


  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name", "user_id"]);

  React.useEffect(() => {

    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

/*   console.log("props:", ); */
  return (
    <>
      <IndexNavbar />
      <NewVehicleListingHeader data={data.state.result}/>
      <VehicleProfileCarousel data={data.state.result}/>
      <VehicleProfileDescription data={data.state.result}/>
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

export default VehicleListing;

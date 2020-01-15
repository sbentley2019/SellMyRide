import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewVehicleListingHeader from "components/Headers/NewVehicleListingHeader.js";
import VehicleProfileCarousel from "components/Sections/VehicleProfileCarousel.js";
import VehicleProfileDescription from "components/Sections/VehicleProfileDescription.js";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Modal,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
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

  console.log(localLat, localLng);

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

export default function VehicleListing() {
  let data = useLocation();

  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name", "user_id"]);
  const [vehicle, setVehicle] = useState({});
  const [liveModal, setLiveModal] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  useEffect(() => {
    axios.get(`/api/listing/${data.state.result}`).then(res => {
      console.log(res.data[0]);
      setVehicle(res.data[0]);
    });
  }, []);

  postal = vehicle.city;
  car = vehicle;

  const sendText = function() {
    console.log("send text");
    if (!cookies.user_id) {
      alert("Register or login to send messages.");
    }
    if (message) {
      axios.put(`/api/messages/${cookies.user_id}/${vehicle.user_id}`, {
        message: message
      });
      setLiveModal(false);
    }
  };
  /*   console.log("props:", ); */
  return (
    <>
      <IndexNavbar />
      <NewVehicleListingHeader data={vehicle} />
      <VehicleProfileCarousel data={vehicle} />
      <VehicleProfileDescription
        fire={() => setLiveModal(true)}
        data={vehicle}
      />
      <Modal isOpen={liveModal} toggle={() => setLiveModal(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Send Message
          </h5>
        </div>
        <div className="modal-body">
          <FormGroup row>
            <Input
              type="text"
              min="0"
              step="1"
              name="text"
              id="formText"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
          </FormGroup>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => setLiveModal(false)}
            >
              Never mind
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={() => sendText()}
            >
              Send
            </Button>
          </div>
        </div>
      </Modal>
      {/* <Button
        className="btn-round"
        color="success"
        outline
        onClick={() => setLiveModal(true)}
      >
        Message Seller
      </Button> */}
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

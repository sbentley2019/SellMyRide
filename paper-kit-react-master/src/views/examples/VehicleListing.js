import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewVehicleListingHeader from "components/Headers/NewVehicleListingHeader.js";
import VehicleProfileCarousel from "components/Sections/VehicleProfileCarousel.js";
import VehicleProfileDescription from "components/Sections/VehicleProfileDescription.js";
import MapsSection from "components/Sections/MapsSection.js";
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


export default function VehicleListing() {
  let data = useLocation();

  console.log("This is the new data: ", data.state.result);

  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name", "user_id"]);

  const [liveModal, setLiveModal] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });


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
      <NewVehicleListingHeader data={data.state.result} />
      <VehicleProfileCarousel data={data.state.result} />
      <VehicleProfileDescription
        fire={() => setLiveModal(true)}
        data={data.state.result}
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
       <MapsSection data={data.state.result}/>

    </>
  );
}
